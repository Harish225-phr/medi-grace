import { useEffect, useState } from "react";
import { getPageById } from "../service/pageService";
import type { BlogPost } from "../types/wordpress";

const useBlogPosts = (pageId: number, limit?: number) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageId) return;

    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const data = await getPageById(pageId);
        
        // Parse the JSON string from WordPress ACF
        const blogJsonString = data?.acf?.blog_json || '[]';
        let blogData = [];
        
        try {
          blogData = JSON.parse(blogJsonString);
          // Ensure it's an array
          if (!Array.isArray(blogData)) {
            blogData = [];
          }
        } catch (parseError) {
          console.error('Error parsing blog JSON:', parseError);
          blogData = [];
        }

        // If limit is specified, slice the array
        const finalBlogPosts = limit ? blogData.slice(0, limit) : blogData;
        
        setBlogPosts(finalBlogPosts);
      } catch (err: any) {
        setError(err);
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [pageId, limit]);

  return { blogPosts, loading, error };
};

export default useBlogPosts;