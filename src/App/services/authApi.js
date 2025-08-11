import axios from 'axios';

export const login = async (user, password) => {
  try {
    const res = await axios.post('https://dummyjson.com/auth/login', {
      username: user,
      password,
      expiresInMins: 30,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getUser = async (token) => {
  try {
    const res = await axios.get('https://dummyjson.com/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
