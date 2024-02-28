import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { adminNavBar, agentNavbar, userNav } from "../../static/userNavBar";
import { Link } from "react-router-dom";

const Features = () => {
  let navItems = [];
  const { loading, user } = useContext(AuthContext);

  if (user?.role === "admin") {
    navItems = adminNavBar;
  } else if (user?.role === "agent" && user?.role === "active") {
    navItems = agentNavbar;
  } else if (user?.role === "user") {
    navItems = userNav;
  }

  if (loading) {
    return "loading";
  }

  return (
    <div>
      <h1 className="text-head-1 text-center py-14 font-bold">Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 mb-10 text-center">
        {navItems?.map(({ path, title }) => (
          <Link
            key={path}
            to={path}
            className="py-8 px-3 border border-cancel rounded-xl shadow-lg cursor-pointer"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
