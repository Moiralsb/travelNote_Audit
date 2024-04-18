// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/select/deletepostsSym';

export const fetchDeletePostsSym = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.travelnotes;
  } catch (error) {
    console.error('Error fetching delete posts:', error);
    throw error;
  }
};