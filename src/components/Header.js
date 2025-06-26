import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  console.log("Header render");
  //if no dependency array useEffect is called on every render
  //if dependency array is empty = use effect called on initial render(just once)
  //if dependency array is [btnLogin] = useEffect will called every time btnLogin updates

  // everytime btnNameReact is updated, then
  useEffect(() => {
    console.log("useState Render");
  }, [btnLogin]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              {" "}
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-link">Cart</li>
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
