// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/deletepostSym';

export const deletePostSym = async (travelId) => {
  try {
    const response = await axios.post(API_URL, {
        method: 'POST',
      headers: {
        'Content-Type': 'travelid',
      },
      body: travelId,
    });
    alert("逻辑删除成功");
    return response;
  } catch (error) {
    console.error('Error logic deletion:', error);
    throw error;
  }
};