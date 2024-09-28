// src/api.ts
import axios from "axios";

// Create an Axios instance for the RapidAPI Anime API
const api = axios.create({
  baseURL: "https://anime-db.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "dbf04c2d27msh8e319442ec48c5bp140887jsnc3c29b9d65b1", // Access the API key
    "x-rapidapi-host": "anime-db.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export default api;
