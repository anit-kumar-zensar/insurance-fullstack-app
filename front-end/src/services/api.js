import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;

// Why Axios Interceptor (Interview Answer)

// Axios interceptors allow us to automatically attach the JWT token to every API request, avoiding repetitive code.
