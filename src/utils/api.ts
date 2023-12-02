import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

export const fetchRequest = async (url :string, params = {}) => {
  try {
    const { data } = await axiosInstance.get(url, { params });
    console.log("Axios instance data:", data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
