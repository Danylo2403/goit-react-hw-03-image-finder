import axios from 'axios';

const API_KEY = '39816059-d3a82c88c05f4eafba3a232e0';
axios.defaults.baseURL = `https://pixabay.com`;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12`
  );
  return response.data;
};