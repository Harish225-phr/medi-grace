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
