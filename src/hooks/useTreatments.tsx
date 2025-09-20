import { useEffect, useState } from "react";
import { getPageById } from "../service/pageService";
import type { Treatment } from "../types/wordpress";

const useTreatments = (pageId: number, limit?: number) => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageId) return;

    const fetchTreatments = async () => {
      try {
        setLoading(true);
        const data = await getPageById(pageId);

        // Parse the JSON string from WordPress ACF
        const treatmentsJsonString = data?.acf?.treatments_json || '[]';
        let treatmentsData = [];
        
        try {
          treatmentsData = JSON.parse(treatmentsJsonString);
          // Ensure it's an array
          if (!Array.isArray(treatmentsData)) {
            treatmentsData = [];
          }
        } catch (parseError) {
          console.error('Error parsing treatments JSON:', parseError);
          treatmentsData = [];
        }

        // If limit is specified, slice the array
        const finalTreatments = limit ? treatmentsData.slice(0, limit) : treatmentsData;
        
        setTreatments(finalTreatments);
      } catch (err: any) {
        setError(err);
        console.error("Error fetching treatments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, [pageId, limit]);

  return { treatments, loading, error };
};

export default useTreatments;