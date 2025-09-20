import { useEffect, useState } from "react";
import { getPageById } from "../service/pageService";
import type { Review } from "../types/wordpress";

const useReviews = (pageId: number) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageId) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getPageById(pageId);
        
        // Parse the JSON string from WordPress ACF
        const reviewJsonString = data?.acf?.review_json || '[]';
        let reviewData = [];
        
        try {
          reviewData = JSON.parse(reviewJsonString);
          // Ensure it's an array
          if (!Array.isArray(reviewData)) {
            reviewData = [];
          }
        } catch (parseError) {
          console.error('Error parsing review JSON:', parseError);
          reviewData = [];
        }

        setReviews(reviewData);
      } catch (err: any) {
        setError(err);
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [pageId]);

  return { reviews, loading, error };
};

export default useReviews;