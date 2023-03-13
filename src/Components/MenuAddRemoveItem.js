import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
const MenuAddRemoveItem = ({ items }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const addItems = (items) => {
    dispatch(addItem(items));
  };
  const removeItems = (items) => {
    dispatch(removeItem(items.id));
  };

  return (
    <>
      <div className="menu_cart_section">
        <i className="fa-solid fa-minus" onClick={() => removeItems(items)}></i>
        <span>{cartItems.filter((x) => x.id == items.id).length}</span>
        <i className="fa-solid fa-plus" onClick={() => addItems(items)}></i>
      </div>
    </>
  );
};
export default MenuAddRemoveItem;
