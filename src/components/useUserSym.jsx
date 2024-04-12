// useUserSym.js
import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const useUserSym = () => {
  const [userSym, setUserSym] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenSym = localStorage.getItem('userSymToken');

    if (tokenSym) {
      try {
        const decodedUser = jwtDecode(tokenSym);
        setUserSym(decodedUser);
        console.log(decodedUser);
      } catch (error) {
        console.error('Error decoding tokenSym:', error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return { userSym, loading };
};

export default useUserSym;