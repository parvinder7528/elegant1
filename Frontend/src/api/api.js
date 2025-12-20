import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://elegant1-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
