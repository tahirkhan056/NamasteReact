import { useContext } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/img/foodyshark.png";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <a href="/">
      <div className="flex">
        <div>
          <img className="h-24 p-2" alt="logo" src={logoSrc} />
        </div>
        <div className="py-8">
          <span className="text-4xl text-blue-400 drop-shadow-xl italic">
            FoodyShark
          </span>
        </div>
      </div>
    </a>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-md bg-pink-200">
      <Title />
      <div className="py-8 mr-8 text-blue-400">
        <ul className="flex">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="py-8 mr-8 text-blue-400">
        <span className="p-3">Welcome {user.name}</span>
      </div>
    </div>
  );
};

export default Header;
