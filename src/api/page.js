import api from "./axiosInstance";

export const getPageById = async (id) => {
  const res = await api.get(`pages/${id}`);
  return res.data;
};
