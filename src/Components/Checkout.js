import CartItems from './CartItems';
import CheckoutItems from './CheckoutItems';
import MenuAddRemoveItem from './MenuAddRemoveItem';

const Checkout = () => {
  return (
    <>
      <div className="checkout_container">
        <div className="checkout_detials">
          <div className="heading">Select Delivery Address</div>
          <p>You have a saved address in this location</p>
          <div className="checkout_addres">
            <div className="checkout_info">
              <span>Work</span>
              <span>Raipur Road, Dehradun Uttarakhand - 248008</span>
              <button>Deliver here</button>
            </div>
            <div className="checkout_info">
              <span>Add New Address</span>
              <span>Dehradun Uttarakhand - 248008</span>
              <button>Add New</button>
            </div>
          </div>
        </div>
        <div className="checkout_cart">
          <CheckoutItems />
        </div>
      </div>
    </>
  );
};
export default Checkout;
