import { useSelector } from 'react-redux';
import MenuAddRemoveItem from './MenuAddRemoveItem';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const cartMenuItems = useSelector((store) => store.cart.items);
  const uniqueCartItems = [...new Set(cartMenuItems)];

  const total = cartMenuItems
    .map((val) => (val.price > 0 ? val.price / 100 : val.defaultPrice / 100))
    .reduce((sum, item) => sum + item, 0);
  return (
    <>
      <div className="text-3xl">Cart</div>
      <div className="text-sm">{cartMenuItems.length} ITEMS</div>
      <div className="mt-3">
        {uniqueCartItems.map((items, idx) => {
          return (
            <div className="cart_buy_items" key={idx}>
              <div className="item_name">{items.name}</div>
              <MenuAddRemoveItem items={items} />
              <div className="item_price">
                ₹{' '}
                {Math.floor(
                  (items.price > 0
                    ? items.price / 100
                    : items.defaultPrice / 100) *
                    cartMenuItems.filter((order) => order.id == items.id).length
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="menu_total">
        <div className="text-3xl">Subtotal</div>
        <div className="text-base font-bold">₹ {Math.floor(total)}</div>
      </div>
      <div className="menu_checkout_btn">
        <p>Extra charges may apply</p>
        <Link to="/cart">
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
};
export default CartItems;
