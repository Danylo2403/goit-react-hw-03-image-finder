import axios from 'axios';

const API_KEY = '39697643-05aaf1ea096fe2d546d4f9e2e';
axios.defaults.baseURL = `https://pixabay.com`;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12`
  );
  return response.data;
};