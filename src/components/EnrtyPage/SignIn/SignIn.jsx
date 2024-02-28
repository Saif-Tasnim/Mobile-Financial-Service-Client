import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../../Shared/Icon/Icon";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../provider/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [btnDisabled, setBtnDisabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = async (data) => {
    setBtnDisabled(true);
    if (data.pin.length !== 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "PIN has not exact 5 digit",
      });
      setBtnDisabled(false);
      return;
    }

    try {
      const res = await signIn(data);
      if (res.data) {
        navigate(from, { replace: true });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Response Status : ${error.response.status}`,
        text: error.response.data.message,
      });
      setBtnDisabled(false);
    }
  };

  return (
    <section className="mt-9">
      <div className="bg-white rounded-xl px-12 py-8 mb-4 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Email or Phone Number"
              {...register("mail_phone", { required: true })}
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
            />
            {errors?.mail_phone?.type === "required" && (
              <p role="alert" className="text-red-600 pt-3">
                * Email Or Phone Number is required
              </p>
            )}
          </div>

          {/* password */}
          <div className="my-5 relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter 5 digits PIN"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
              {...register("pin", { required: true })}
            />
            {errors?.pin?.type === "required" && (
              <p role="alert" className="text-red-600 pt-3">
                * PIN is required
              </p>
            )}
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <Icon.EyeOff /> : <Icon.Eye />}
            </div>
          </div>

          {btnDisabled ? (
            ""
          ) : (
            <button
              className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5 font-bold"
              disabled={btnDisabled}
            >
              Sign In
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
