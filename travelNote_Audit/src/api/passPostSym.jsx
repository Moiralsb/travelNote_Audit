// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/passpostSym';

export const passPostSym = async (travelId) => {
  try {
    const response = await axios.post(API_URL, {
        method: 'POST',
      headers: {
        'Content-Type': 'travelid',
      },
      body: travelId,
    });
    alert("审核状态修改成功-2");
    return response;
  } catch (error) {
    console.error('Error status2 changing:', error);
    throw error;
  }
};