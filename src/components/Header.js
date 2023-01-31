import logoSrc from "../images/foodyshark.png";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
