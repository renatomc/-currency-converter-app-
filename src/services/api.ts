import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FIXER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_FIXER_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: API_KEY,
  },
});
