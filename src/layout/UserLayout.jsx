import React, { useContext } from "react";
import UserHeader from "../components/Shared/UserHeader/UserHeader";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  
  return (
    <div>
      <UserHeader />
      <Outlet />
    </div>
  );
};

export default UserLayout;
