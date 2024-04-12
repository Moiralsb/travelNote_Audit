// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/rejectpostSym';

export const rejectPostSym = async (travelId, rejectReason) => {
  try {
    const response = await axios.post(API_URL, {
        method: 'POST',
      headers: {
        'Content-Type': 'travelid',
      },
      body: { // 使用 data 属性并发送一个对象
        travelId: travelId,
        rejectReason: rejectReason
      }
    });
    alert("审核状态修改成功-1");
    return response.status;
  } catch (error) {
    console.error('Error status1 changing:', error);
    throw error;
  }
};