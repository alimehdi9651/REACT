import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/OnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  // console.log("Header render");
  const { loggedInUser } = useContext(UserContext);

  //if no dependency array useEffect is called on every render
  //if dependency array is empty = use effect called on initial render(just once)
  //if dependency array is [btnLogin] = useEffect will called every time btnLogin updates
  const onlineStatus = useOnlineStatus();
  // everytime btnNameReact is updated, then
  useEffect(() => {
    console.log("useState Render");
  }, [btnLogin]);

  //Selector: a react hook that is responsible for subscribing the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg">
      <div className="logo-container w-46">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 text-xl justify-around">
          <li className="mr-4">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mr-4">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className="nav-link">
              {" "}
              About Us
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>
          <li className="nav-link font-bold mr-4">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="nav-link mr-4 font-bold">{loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
