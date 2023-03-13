import { IMG_CDN } from '../const';
import { useContext, useState } from 'react';
import FavContext from '../utils/FavContext';
const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwoString,
  aggregatedDiscountInfo,
  id,
}) => {
  const { card, setCard } = useContext(FavContext);
  const [show, setShow] = useState(true);

  const favourite = (e) => {
    e.preventDefault();
    if (show) {
      setShow(false);
      setCard([
        ...card,
        {
          name: name,
          id: id,
          cuisines: cuisines,
          cloudinaryImageId: cloudinaryImageId,
          avgRating: avgRating,
          deliveryTime: deliveryTime,
          costForTwoString: costForTwoString,
          aggregatedDiscountInfo: aggregatedDiscountInfo,
        },
      ]);
    } else {
      setShow(true);
      const filterList = Object.values(card).filter((val) => val.name != name);
      setCard(filterList);
    }
  };

  return (
    <div className="card">
      <span>
        {show ? (
          <i
            className="heart_icon fa-regular fa-heart"
            onClick={(e) => favourite(e)}
          ></i>
        ) : (
          <i
            className="heart_icon fa-solid fa-heart"
            onClick={(e) => favourite(e)}
          ></i>
        )}
      </span>
      <img loading="lazy" src={IMG_CDN + cloudinaryImageId} />

      <div className="card_details">
        <div className="card_name ">{name}</div>
        <div className="card_tag">{cuisines.join(', ')}</div>
      </div>
      <div className="card_info ">
        <div
          className="card_ratting"
          style={
            avgRating === '--'
              ? { backgroundColor: 'grey' }
              : avgRating >= 4
              ? { backgroundColor: '#48c479' }
              : { backgroundColor: '#db7c38' }
          }
        >
          <span>
            <i className="fa-sharp fa-solid fa-star"></i>
          </span>
          <span>{avgRating}</span>
        </div>
        <div className="card_time">{deliveryTime} MINS</div>
        <div className="card_cost">{costForTwoString}</div>
      </div>
      <div className="card_offer ">
        <i className="fa-solid fa-tag"></i>
        <span className="ml-2">
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </span>
      </div>
    </div>
  );
};

export default ResturantCard;
