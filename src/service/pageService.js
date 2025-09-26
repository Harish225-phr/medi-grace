import wordpress from "../api/axiosInstance";

// ✅ Page fetch service
export const getPageById = async (id) => {
  try {
    const response = await wordpress.get(`/pages/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
};

// ✅ Blog post fetch service
export const getBlogPostById = async (postId) => {
  try {
    const response = await wordpress.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
};
