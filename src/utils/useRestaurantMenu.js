import { FETCH_MENU_URL } from '../const';
import { useState, useEffect } from 'react';
const useResturant = (resId) => {
  const [restaurantItems, setResturantItems] = useState();
  const [category, setCategory] = useState();
  const [resturantInfo, setResturantInfo] = useState();
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResturantItems(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setResturantInfo(json.data.cards[0].card.card.info);
    // Getting Categorys
    let categorys = new Set();
    json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
      (val) => {
        categorys.add(val.card.info.category);
      }
    );
    setCategory([...categorys]);
  };
  return [restaurantItems, category, resturantInfo];
};
export default useResturant;
