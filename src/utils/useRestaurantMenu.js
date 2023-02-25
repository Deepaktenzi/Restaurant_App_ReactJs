import { FETCH_MENU_URL } from '../const';
import { useState, useEffect } from 'react';
const useResturant = (resId) => {
  const [restaurant, setResturant] = useState();
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResturant(json.data);
  };
  return restaurant;
};
export default useResturant;
