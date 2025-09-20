import { useEffect, useState } from "react";
import { getPageById } from "../service/pageService";
import type { Dermatologist } from "../types/wordpress";

const useDermatologists = (pageId: number, limit?: number) => {
  const [dermatologists, setDermatologists] = useState<Dermatologist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageId) return;

    const fetchDermatologists = async () => {
      try {
        setLoading(true);
        const data = await getPageById(pageId);
        
        // Parse the JSON string from WordPress ACF
        const dermatologistsJsonString = data?.acf?.dermatologists_json || '[]';
        let dermatologistsData = [];
        
        try {
          dermatologistsData = JSON.parse(dermatologistsJsonString);
          // Ensure it's an array
          if (!Array.isArray(dermatologistsData)) {
            dermatologistsData = [];
          }
        } catch (parseError) {
          console.error('Error parsing dermatologists JSON:', parseError);
          dermatologistsData = [];
        }

        // If limit is specified, slice the array
        const finalDermatologists = limit ? dermatologistsData.slice(0, limit) : dermatologistsData;
        
        setDermatologists(finalDermatologists);
      } catch (err: any) {
        setError(err);
        console.error("Error fetching dermatologists:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDermatologists();
  }, [pageId, limit]);

  return { dermatologists, loading, error };
};

export default useDermatologists;