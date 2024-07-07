import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getBlogs = async () => {
  const response = await axios.get(`${API_URL}blogs/`);
  return response.data;
};

export const getBlogById = async (id) => {
    const response = await axios.get(`${API_URL}blogs/${id}/`);
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