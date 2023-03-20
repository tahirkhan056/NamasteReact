import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logoSrc from "../assets/img/foodyshark.png";

/**
 * ! For User Context and useOnline Custom Hooks
 * import { useContext } from "react";
 * import UserContext from "../utils/UserContext";
 * import useOnline from "../utils/useOnline";
 */

import {
  TbDiscount2,
  IoHelpBuoyOutline,
  HiOutlineUser,
  BsFillCartFill,
  BiSearch,
} from "react-icons/all";

const Title = () => {
  return (
    <Link to={"/"}>
      <div className="flex">
        <div>
          <img
            data-testid="logo"
            className="h-20 p-2"
            alt="logo"
            src={logoSrc}
          />
        </div>
        <div className="py-5">
          <span className="text-4xl text-blue-400 drop-shadow-xl shadow-black italic">
            FoodyShark
          </span>
        </div>
      </div>
    </Link>
  );
};

const Header = () => {
  /**
   * ! For User Context and useOnline Custom Hooks
   *    const { user } = useContext(UserContext);
   *    const isOnline = useOnline();
   */
  const { items } = useSelector((store) => store.cart);

  const totalItem = items?.reduce((c, a) => {
    return c + a.quantity;
  }, 0);

  return (
    <div className="bg-white max-h-20 shadow-xl fixed top-0 w-full z-10">
      <div className="flex justify-between  px-5 mx-20">
        <Title />
        <div className="py-7">
          <ul className="flex">
            <li className="px-5 hover:text-blue-400">
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <div className="flex">
                  <BiSearch
                    className="text-2xl mr-2"
                    value={{ style: { verticalAlign: "middle" } }}
                  />{" "}
                  Search
                </div>
              </NavLink>
            </li>
            <li className="px-5 hover:text-blue-400">
              <NavLink
                to="/offers"
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <div className="flex">
                  <TbDiscount2
                    className="text-2xl mr-2"
                    value={{ style: { verticalAlign: "middle" } }}
                  />{" "}
                  Offers
                </div>
              </NavLink>
            </li>
            <li className="px-5 hover:text-blue-400">
              <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <div className="flex">
                  <IoHelpBuoyOutline
                    className="text-2xl mr-2"
                    value={{ style: { verticalAlign: "middle" } }}
                  />{" "}
                  Help
                </div>
              </NavLink>
            </li>
            <li className="px-5 hover:text-blue-400">
              <NavLink
                to="/signin"
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <div className="flex">
                  <HiOutlineUser
                    className="text-2xl mr-2"
                    value={{ style: { verticalAlign: "middle" } }}
                  />{" "}
                  Sign In
                </div>
              </NavLink>
            </li>
            <li className="px-5 hover:text-blue-400">
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <div className="flex">
                  <div className="relative left-[22px] top-1 text-xs text-white w-5 text-center">
                    <span>{totalItem}</span>
                  </div>
                  <BsFillCartFill
                    className={`text-2xl mr-2 ${
                      items.length ? "text-green-500" : ""
                    }`}
                    value={{ style: { verticalAlign: "middle" } }}
                  />{" "}
                  Cart
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        {/**
         * ! For Cheking Online Status
         *
         * <div className="py-8 mr-8 text-blue-400">
         *    <span className="p-3">Welcome {user?.name}</span>
         *    <h1 data-testid="online">{isOnline ? "🟢" : "🔴"}</h1>
         * </div>
         */}
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default Header;
