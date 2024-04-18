// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/select/passpostsSym';

export const fetchPassPostsSym = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.travelnotes;
  } catch (error) {
    console.error('Error fetching pass posts:', error);
    throw error;
  }
};