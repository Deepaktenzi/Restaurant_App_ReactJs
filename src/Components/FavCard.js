import { useContext, useState } from 'react';
import { IMG_CDN } from '../const';
import FavContext from '../utils/FavContext';
const FavCard = ({
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
  const [fav, setFav] = useState(true);

  const favourite = (e) => {
    e.preventDefault();
    if (fav) {
      const filterList = card.filter((val) => val.name != name);
      setCard([...filterList]);
    }
  };

  return (
    <>
      <div className="card">
        <span>
          <i
            className="heart_icon fa-solid fa-xmark"
            onClick={(e) => favourite(e)}
          ></i>
        </span>
        <img src={IMG_CDN + cloudinaryImageId} />

        <div className="card_details">
          <div className="card_name ">{name}</div>
          <div className="card_tag">{cuisines.join(', ')}</div>
        </div>
        <div className="card_info ">
          <div
            className="card_ratting"
            style={
              avgRating >= 4
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
          {aggregatedDiscountInfo?.shortDescriptionList[0].meta ? (
            <>
              <i className="fa-solid fa-tag"></i>
              <span className="ml-2">
                {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
              </span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FavCard;
