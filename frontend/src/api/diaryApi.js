import axios from "axios";

const API_URL = "http://localhost:4000/api/diaries";

export const getDiaries = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addDiary = async (token, diary) => {
  const res = await axios.post(API_URL, diary, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const editDiary = async (token, id, updatedDiary) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedDiary, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteDiary = async (token, id) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
