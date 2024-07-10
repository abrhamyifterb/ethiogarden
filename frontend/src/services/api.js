import axios from 'axios';

const API_URL = "/api/";

export const getHeader = async () => {
  const response = await axios.get(`${API_URL}header/`);
  return response.data[0];
};

export const getHomePage = async () => {
  const response = await axios.get(`${API_URL}homepage/`);
  return response.data[0];
};

export const getFooter = async () => {
  const response = await axios.get(`${API_URL}footer/`);
  return response.data[0];
};

export const getCategory = async () => {
  const response = await axios.get(`${API_URL}categories/`);
  return response.data;
};

export const getBlogs = async () => {
  const response = await axios.get(`${API_URL}blogs/`);
  return response.data;
};

export const getBlogById = async (id) => {
    const response = await axios.get(`${API_URL}blogs/${id}/`);
    return response.data;
  };

export const getBlogsByCategory = async (categoryId) => {
  const response = await axios.get(`${API_URL}blogs/?category=${categoryId}`);
  return response.data;
};

export const getVideos = async () => {
  const response = await axios.get(`${API_URL}videos/`);
  return response.data;
};

export const getVideoById = async (id) => {
  const response = await axios.get(`${API_URL}videos/${id}/`);
  return response.data;
};

export const getVideosByCategory = async (categoryId) => {
  const response = await axios.get(`${API_URL}videos/?category=${categoryId}`);
  return response.data;
};

export const fetchFAQs = async () => {
  const response = await axios.get(`${API_URL}faqs/`);
  return response.data;
};

export const getAboutUs = async () => {
    const response = await axios.get(`${API_URL}aboutus/`);
    return response.data[0];
};

export const submitContactInquiry = async (data) => {
    const response = await axios.post(`${API_URL}contactus/`, data);
    return response.data;
};