import { RESTAURANT_CAROUSELS_API } from '../const';
const Coursels = ({ creativeId }) => {
  return <img src={RESTAURANT_CAROUSELS_API + creativeId} alt="" />;
};
export default Coursels;
