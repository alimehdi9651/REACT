import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCar = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        onClick={handleClearCar}
        className="p-2 m-2 bg-black text-white rounded cursor-pointer"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1 className="font-bold text-lg mt-10">Your cart is empty</h1>}
      <div className="w-6/12  p-2 bg-gray-100 shadow-lg mx-auto my-4">
        <ItemCards items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
