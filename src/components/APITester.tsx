import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const APITester = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testPost210 = async () => {
    setLoading(true);
    setResult(null);

    try {
      console.log("Testing direct API call to post 210...");
      
      // Test the exact URL that should work for post 210
      const url = 'https://findskin.doctor/wp-json/wp/v2/posts/210?_embed';
      console.log("Calling URL:", url);
      
      const response = await fetch(url);
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      if (response.ok) {
        const data = await response.json();
        console.log("SUCCESS! Data received:", data);
        setResult({
          success: true,
          status: response.status,
          title: data.title?.rendered,
          id: data.id,
          fullData: data
        });
      } else {
        const errorText = await response.text();
        console.log("ERROR! Response text:", errorText);
        setResult({
          success: false,
          status: response.status,
          error: errorText,
          url: url
        });
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        type: 'fetch_error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto m-4">
      <CardHeader>
        <CardTitle>Direct API Test for Post 210</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={testPost210} 
          disabled={loading}
          className="mb-4"
        >
          {loading ? 'Testing...' : 'Test Post 210 API Call'}
        </Button>

        {result && (
          <div className="mt-4 p-4 border rounded">
            {result.success ? (
              <div className="text-green-600">
                <h3 className="font-bold">✅ SUCCESS!</h3>
                <p>Status: {result.status}</p>
                <p>Post ID: {result.id}</p>
                <p>Title: "{result.title}"</p>
                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">View Full Data</summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-96">
                    {JSON.stringify(result.fullData, null, 2)}
                  </pre>
                </details>
              </div>
            ) : (
              <div className="text-red-600">
                <h3 className="font-bold">❌ FAILED</h3>
                <p>Status: {result.status}</p>
                <p>Error: {result.error}</p>
                {result.url && <p>URL: {result.url}</p>}
                {result.type === 'fetch_error' && (
                  <p className="mt-2 text-orange-600">
                    This might be a CORS or network issue, not a 404.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-4 p-3 bg-blue-50 rounded">
          <h4 className="font-medium text-blue-800">What this test does:</h4>
          <ul className="text-sm text-blue-700 mt-1 space-y-1">
            <li>• Makes a direct call to: https://findskin.doctor/wp-json/wp/v2/posts/210?_embed</li>
            <li>• Shows the exact response status and data</li>
            <li>• Helps identify if the issue is with the API or your code</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default APITester;