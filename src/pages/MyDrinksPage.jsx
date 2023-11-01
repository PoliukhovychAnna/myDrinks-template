import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com';
axios.defaults.baseURL = BASE_URL;

export async function getUserDrinks() {
  const { data } = await axios.get(`/api/drinks/own/all`);
  return data;
}
