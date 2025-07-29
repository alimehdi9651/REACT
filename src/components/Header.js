import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/OnlineStatus";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  console.log("Header render");
  //if no dependency array useEffect is called on every render
  //if dependency array is empty = use effect called on initial render(just once)
  //if dependency array is [btnLogin] = useEffect will called every time btnLogin updates
  const onlineStatus = useOnlineStatus()
  // everytime btnNameReact is updated, then
  useEffect(() => {
    console.log("useState Render");
  }, [btnLogin]);

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container w-46">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 text-xl justify-around">
          <li className="mr-4">
            Online Status {onlineStatus? '🟢':'🔴'}
          </li>
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
          <li className="nav-link mr-4">Cart</li>
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
