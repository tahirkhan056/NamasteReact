import { Link } from "react-router-dom";
import logoSrc from "../assets/img/foodyshark.png";

const Title = () => {
  return (
    <a href="/">
      <div className="logo">
        <div>
          <img className="logo-img" alt="logo" src={logoSrc} />
        </div>
        <div>
          <span>FoodyShark</span>
        </div>
      </div>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
