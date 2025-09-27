// Debug script to test your treatments JSON data structure
// Add this to a test page to verify your data

import { useState, useEffect } from 'react';

const TreatmentsDataDebugger = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndAnalyzeData = async () => {
      try {
        setLoading(true);
        
        // Fetch the treatments page
        const response = await fetch('https://findskin.doctor/wp-json/wp/v2/pages/2466');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch page 2466: ${response.status}`);
        }
        
        const pageData = await response.json();
        console.log('Raw page data:', pageData);
        
        const treatmentsJsonString = pageData?.acf?.treatments_json || '[]';
        console.log('Raw JSON string:', treatmentsJsonString);
        
        let treatmentsData = [];
        try {
          treatmentsData = JSON.parse(treatmentsJsonString);
          console.log('Parsed treatments data:', treatmentsData);
        } catch (parseError) {
          throw new Error(`JSON parsing failed: ${parseError}`);
        }

        // Analyze the data
        const analysis = {
          totalTreatments: treatmentsData.length,
          sampleTreatment: treatmentsData[0],
          allPostIds: treatmentsData.map((t: any) => t.post_id || t.id),
          missingPostIds: treatmentsData.filter((t: any) => !t.post_id && !t.id),
          dataStructure: treatmentsData.length > 0 ? Object.keys(treatmentsData[0]) : []
        };
        
        setData({
          pageData,
          treatmentsData,
          analysis
        });
      } catch (err) {
        console.error('Debug error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchAndAnalyzeData();
  }, []);

  if (loading) return <div className="p-4">Loading treatments data analysis...</div>;
  
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Treatments Data Analysis</h2>
      
      <div className="space-y-6">
        {/* Summary */}
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-semibold text-blue-800">Summary</h3>
          <p>Total Treatments: {data.analysis.totalTreatments}</p>
          <p>Post IDs found: {data.analysis.allPostIds.filter(id => id).length}</p>
          <p>Missing Post IDs: {data.analysis.missingPostIds.length}</p>
        </div>

        {/* All Post IDs */}
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-semibold mb-2">All Post IDs in your data:</h3>
          <div className="flex flex-wrap gap-2">
            {data.analysis.allPostIds.map((id: any, index: number) => (
              <span key={index} className="bg-blue-100 px-2 py-1 rounded text-sm">
                {id || 'MISSING'}
              </span>
            ))}
          </div>
        </div>

        {/* Sample Treatment */}
        <div className="bg-green-50 p-4 rounded">
          <h3 className="font-semibold text-green-800 mb-2">Sample Treatment Data Structure:</h3>
          <pre className="bg-white p-2 rounded text-sm overflow-auto">
            {JSON.stringify(data.analysis.sampleTreatment, null, 2)}
          </pre>
        </div>

        {/* Data Structure */}
        <div className="bg-purple-50 p-4 rounded">
          <h3 className="font-semibold text-purple-800 mb-2">Available Fields:</h3>
          <div className="flex flex-wrap gap-2">
            {data.analysis.dataStructure.map((field: string) => (
              <span key={field} className="bg-purple-100 px-2 py-1 rounded text-sm">
                {field}
              </span>
            ))}
          </div>
        </div>

        {/* Raw Data */}
        <details className="bg-gray-50 p-4 rounded">
          <summary className="font-semibold cursor-pointer">Raw JSON Data (click to expand)</summary>
          <pre className="bg-white p-2 rounded text-xs overflow-auto mt-2 max-h-96">
            {JSON.stringify(data.treatmentsData, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default TreatmentsDataDebugger;