const EmptyCart = () => {
  return (
    <>
      <span className="text-3xl">Cart Empty</span>
      <img
        className="mt-3"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
        alt="cart"
      />
      <p className="text-sm text-[#a19a9a] mt-3">
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </p>
    </>
  );
};
export default EmptyCart;
