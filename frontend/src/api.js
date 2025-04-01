import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/calories/";

export const getCalorieEntries = () => axios.get(API_URL);
export const addCalorieEntry = (data) => axios.post(API_URL, data);
export const deleteCalorieEntry = (id) => axios.delete(`${API_URL}${id}/`);
