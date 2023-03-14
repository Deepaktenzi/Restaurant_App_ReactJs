import { RESTAURANT_CAROUSELS_API } from '../const';
const Coursels = ({ creativeId }) => {
  return (
    <div className="carousel_card">
      <img src={RESTAURANT_CAROUSELS_API + creativeId} alt="" />
    </div>
  );
};
export default Coursels;
