import { BASE_URL } from '@env';
import axios from 'axios';

export const host = axios.create({
  baseURL: BASE_URL,
});
