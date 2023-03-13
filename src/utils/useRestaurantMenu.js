import { FETCH_MENU_URL } from '../const';
import { useState, useEffect } from 'react';
const useResturant = (resId) => {
  const [restaurant, setResturant] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResturant(json.data);

    // Getting Categorys
    let categorys = new Set();
    Object.values(json.data.menu.items).map((val) => {
      categorys.add(val.category);
    });
    setCategory([...categorys]);
  };
  return [restaurant, category];
};
export default useResturant;
