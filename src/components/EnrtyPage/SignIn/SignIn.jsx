import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../../Shared/Icon/Icon";

const SignIn = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <section className="mt-9">
      <div className="bg-white rounded-xl px-12 py-8 mb-4 shadow-lg">
        <form>
          {/* email */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
            />
          </div>

          {/* password */}
          <div className="my-5 relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter 5 digits PIN"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
            />
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <Icon.EyeOff /> : <Icon.Eye />}
            </div>
          </div>

          <button
            className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5 font-bold"
            disabled={btnDisabled}
          >
            {" "}
            Sign In{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
