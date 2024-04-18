// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/select/notexaminpostsSym';

export const fetchNotexaminPostsSym = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.travelnotes;
  } catch (error) {
    console.error('Error fetching notexamin posts:', error);
    throw error;
  }
};