import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WordPressDebugger = () => {
  const [postId, setPostId] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testPostId = async () => {
    if (!postId) return;
    
    setLoading(true);
    const testResults = {
      postId,
      timestamp: new Date().toISOString(),
      postResult: null,
      pageResult: null,
      postError: null,
      pageError: null
    };

    // Test as POST
    try {
      const postResponse = await fetch(`https://findskin.doctor/wp-json/wp/v2/posts/${postId}?_embed`);
      if (postResponse.ok) {
        const postData = await postResponse.json();
        testResults.postResult = {
          status: postResponse.status,
          title: postData.title?.rendered,
          type: 'post',
          exists: true
        };
      } else {
        testResults.postError = `Status: ${postResponse.status} ${postResponse.statusText}`;
      }
    } catch (err) {
      testResults.postError = `Error: ${err}`;
    }

    // Test as PAGE
    try {
      const pageResponse = await fetch(`https://findskin.doctor/wp-json/wp/v2/pages/${postId}?_embed`);
      if (pageResponse.ok) {
        const pageData = await pageResponse.json();
        testResults.pageResult = {
          status: pageResponse.status,
          title: pageData.title?.rendered,
          type: 'page',
          exists: true
        };
      } else {
        testResults.pageError = `Status: ${pageResponse.status} ${pageResponse.statusText}`;
      }
    } catch (err) {
      testResults.pageError = `Error: ${err}`;
    }

    setResults(testResults);
    setLoading(false);
  };

  return (
    <Card className="max-w-2xl mx-auto m-4">
      <CardHeader>
        <CardTitle>WordPress Post/Page ID Debugger</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Enter Post/Page ID (e.g., 210)"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
          />
          <Button onClick={testPostId} disabled={loading || !postId}>
            {loading ? 'Testing...' : 'Test ID'}
          </Button>
        </div>

        {results && (
          <div className="space-y-4">
            <h3 className="font-semibold">Results for ID: {results.postId}</h3>
            
            {/* Post Results */}
            <div className="p-3 border rounded">
              <h4 className="font-medium text-blue-600">As Post (/posts/{results.postId})</h4>
              {results.postResult ? (
                <div className="text-green-600">
                  ✅ Found! Title: "{results.postResult.title}"
                </div>
              ) : (
                <div className="text-red-600">
                  ❌ {results.postError}
                </div>
              )}
            </div>

            {/* Page Results */}
            <div className="p-3 border rounded">
              <h4 className="font-medium text-purple-600">As Page (/pages/{results.postId})</h4>
              {results.pageResult ? (
                <div className="text-green-600">
                  ✅ Found! Title: "{results.pageResult.title}"
                </div>
              ) : (
                <div className="text-red-600">
                  ❌ {results.pageError}
                </div>
              )}
            </div>

            {/* Recommendation */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800">Recommendation:</h4>
              {results.postResult && results.pageResult ? (
                <p className="text-blue-700">⚠️ ID exists as BOTH post and page! Choose one endpoint.</p>
              ) : results.postResult ? (
                <p className="text-blue-700">✅ Use the /posts/ endpoint for this ID</p>
              ) : results.pageResult ? (
                <p className="text-blue-700">✅ Use the /pages/ endpoint for this ID</p>
              ) : (
                <p className="text-blue-700">❌ This ID doesn't exist as either post or page</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WordPressDebugger;