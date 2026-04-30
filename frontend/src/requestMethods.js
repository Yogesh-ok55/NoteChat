import axios from "axios";
const LocalBASE_URL="http://localhost:8000/api/";
const BASE_URL = "http://localhost:8000/api/";

export const pf="http://localhost:8000/images";

export const publicRequest = axios.create({
  baseURL: LocalBASE_URL,
});

export const userRequest = axios.create({
  baseURL: LocalBASE_URL,
});