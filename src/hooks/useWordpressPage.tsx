import { useEffect, useState } from "react";
import { getPageById } from "../service/pageService";
import type { WPPage } from "../types/wordpress";

const useWordpressPage = (pageId: number) => {
  const [page, setPage] = useState<WPPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageId) return;

    const fetchPage = async () => {
      try {
        setLoading(true);
        const data: WPPage = await getPageById(pageId);
        setPage(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [pageId]);

  return { page, loading, error };
};

export default useWordpressPage;
