import { IMG_CDN } from '../const';

const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
