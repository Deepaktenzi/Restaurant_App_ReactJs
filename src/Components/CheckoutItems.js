import { useSelector } from 'react-redux';
import MenuAddRemoveItem from './MenuAddRemoveItem';

const CheckoutItems = () => {
  const cartMenuItems = useSelector((store) => store.cart.items);
  const uniqueCartItems = [...new Set(cartMenuItems)];

  //   cartItems.map(x => (x.price > 0 ? x.price / 100 : x.defaultPrice / 100)).reduce((sum, a) => sum + a, 0)
  const total = cartMenuItems
    .map((val) => (val.price > 0 ? val.price / 100 : val.defaultPrice / 100))
    .reduce((sum, item) => sum + item, 0);
  return (
    <div className="checkout_bill">
      <div className="text-3xl">Cart</div>
      <div className="text-sm">{cartMenuItems.length} ITEMS</div>
      <div className="mt-3">
        {uniqueCartItems.map((items, idx) => {
          return (
            <div className="cart_buy_items" key={idx}>
              <div className="item_name">{items.name}</div>
              <MenuAddRemoveItem items={items} />
              <div className="item_price">
                {(items.price > 0
                  ? items.price / 100
                  : items.defaultPrice / 100) *
                  cartMenuItems.filter((order) => order.id == items.id).length}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-[2px] border-dashed p-2  mt-5">
        <textarea
          type="text"
          placeholder='"Any suggestions? We will pass it on...'
          className="w-full outline-none"
        />
      </div>
      <div className="border-[2px] border-dashed p-2 mt-5">
        <span className="font-semibold block">
          Opt in for No-contact Delivery
        </span>
        <span className="block text-[#a19a9a]">
          Unwell, or avoiding contact? Please select no-contact delivery.
          Partner will safely place the order outside your door (not for COD)
        </span>
      </div>
      <div className="border-[2px] border-dashed p-2 mt-5">
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Apply Coupon.."
        />
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-3xl">Bill Details</div>
        <div className="text-base flex justify-between mt-2">
          <div>Item Total</div>
          <div className="font-bold">₹ {total}</div>
        </div>
      </div>
      <div className="flex flex-col mt-3 pt-2 border-t-2">
        <div className="text-base flex justify-between ">
          <div>Total Pay</div>
          <div className="font-bold">₹ {total}</div>
        </div>
      </div>
      <div className="menu_checkout_btn">
        <button>Checkout</button>
      </div>
    </div>
  );
};
export default CheckoutItems;
