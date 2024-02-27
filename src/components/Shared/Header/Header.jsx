import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { commonNavBar, nonUserNav, userNav } from "../../../static/navbar";

const Header = () => {
  const { user } = useContext(AuthContext);
  let navItems;
  if (user) {
    navItems = [...commonNavBar, ...userNav];
  } else {
    navItems = [...commonNavBar, ...nonUserNav];
  }

  return (
    <div className="bg-indigo-50 fixed w-full h-20 z-10 flex justify-around items-center">
      <div>
        <Link to="/" className="flex gap-1 items-center">
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-head-4 text-cancel ml-2 font-bold">Pocket</span>
          <span className="text-head-4 text-pending font-bold">Pal</span>
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        {navItems.map(({ path, title }) => (
          <Link to={path} key={path} className="text-lg hover:text-pending hover:underline transition-all duration-200">
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
