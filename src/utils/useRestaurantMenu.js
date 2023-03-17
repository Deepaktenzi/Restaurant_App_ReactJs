import { FETCH_MENU_URL } from '../const';
import { useState, useEffect } from 'react';
const useResturant = (resId) => {
  const [restaurantItems, setResturantItems] = useState();
  const [category, setCategory] = useState();
  const [resturantInfo, setResturantInfo] = useState();
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    const items = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    let count = 0;
    items.map((val) => {
      if (val.card.card.vegOnlyDetails) {
        count++;
      } else if (val.card.card.name === 'Want to repeat?') {
        count++;
      } else if (val.card.card.carousel) {
        count++;
      }
    });
    setResturantItems(items.slice(count));

    setResturantInfo(json.data.cards[0].card.card.info);
    // Getting Categorys
    let categorys = new Set();
    items.map((val) => {
      if (val.card.card.title) {
        categorys.add(val.card.card.title);
      }
    });
    setCategory([...categorys]);
  };
  return [restaurantItems, category, resturantInfo];
};
export default useResturant;
