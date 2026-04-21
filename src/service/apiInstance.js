// src/services/apiInstance.ts

import axios from "axios";

// export const baseURL="https://a2c8feb53dd0.ngrok-free.app"
// export const baseURL="http://localhost:2001"
export const baseURL = "https://colony-admin-backend.paprikaventures.com";

const apiInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
  //  "ngrok-skip-browser-warning": "1",
    "Content-Type": "application/json",
  },
});

// Add interceptors if needed
if (typeof window !== "undefined") {
  apiInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token") || "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

export default apiInstance;
