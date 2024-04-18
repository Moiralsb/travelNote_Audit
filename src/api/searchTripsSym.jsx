// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/searchtripsSym';

export const searchTripsSym = async (query) => {
  try {
    const response = await axios.post(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'userid',
      },
      body: query,
    });
    return response.data.searchtravelnotes;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};