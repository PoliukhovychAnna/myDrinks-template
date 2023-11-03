// import axios from 'axios';

// const BASE_URL = 'https://drink-master-service.onrender.com';
// axios.defaults.baseURL = BASE_URL;

// export async function getUserDrinks() {
//   const { data } = await axios.get(`/api/drinks/own/all`);
//   return data;
// }

import { DrinksList } from '../components/MyDrinks/DrinksList';
import { DrinkDetails } from 'components/MyDrinks/DrinkDetails';
export function MyDrinksPage() {
  return (
    <>
      {/* <DrinksList /> */}
      <DrinkDetails drink={'639b6de9ff77d221f190c563'} />
    </>
  );
}
