import React, { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
  const [blur, setBlur] = useState(true);
  const { user, loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading && !user) {
    return "loading";
  }

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };


  return (
    <div className="w-full flex justify-center items-center bg-indigo-50 py-16">
      <div className="flex flex-col">
        <h1 className="text-head-2 italic text-cancel font-bold text-center">
          Welcome to Pocket Pal account ...
        </h1>
        <p className="py-6 text-lg">
          A warm greetings to become the member of Pocket Pal family !!{" "}
        </p>

        <div
          className="w-36 h-36 border rounded-full bg-cancel cursor-pointer"
          onClick={() => {
            setBlur(!blur);
          }}
        >
          <p className="pt-12 text-center font-bold"> Balance Inquiry </p>
          <p className={`${blur ? "blur-md" : "blur-none"} text-center pt-4`}>
            {" "}
            TK. {user?.balance}{" "}
          </p>
        </div>
      </div>

      <button
        className="border bg-cancel rounded-md text-lg px-6 py-3 font-bold mt-32"
        onClick={handleLogOut}
      >
        {" "}
        Log Out{" "}
      </button>
    </div>
  );
};

export default UserHeader;
