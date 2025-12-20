// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "/api", // relative URL, works with Vite proxy
  withCredentials: true, // send cookies
  headers: { "Content-Type": "application/json" },
});

export default API;
