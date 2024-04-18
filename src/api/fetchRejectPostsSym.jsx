// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/select/rejectpostsSym';

export const fetchRejectPostsSym = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.travelnotes;
  } catch (error) {
    console.error('Error fetching reject posts:', error);
    throw error;
  }
};