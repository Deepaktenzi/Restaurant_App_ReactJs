import { IMG_CDN } from '../const';

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="card">
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
        <i className="fa-solid fa-tag"></i>
        <span className="ml-2">
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </span>
      </div>
    </div>
  );
};

export default ResturantCard;
