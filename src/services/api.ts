import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;