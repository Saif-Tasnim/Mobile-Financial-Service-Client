import React, { useContext, useState } from "react";
import { Icon } from "../../Shared/Icon/Icon";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  let balance, updateData, active;

  const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = async (data) => {
    setBtnDisabled(true);
    balance = 0;
    updateData = {};
    active = "";

    if (data.pin.length !== 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "PIN has not exact 5 digit",
      });
      setBtnDisabled(false);
      return;
    }

    if (data.phone.length !== 11) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone number incorrect",
      });
      setBtnDisabled(false);
      return;
    }

    try {
      if (data.role === "user") {
        balance = 40;
        active = "open";
        updateData = { ...data, balance, active };
        const res = await signUp(updateData);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Created account successfully",
            icon: "success",
          });
          navigate(from, { replace: true });
        } 
      } else if (data.role == "agent") {
        (balance = 100000), (active = "pending");
        updateData = { ...data, balance, active };
        const res = signUp(updateData);
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Created account successfully",
            icon: "success",
          });
          navigate(from, { replace: true });
        }
      } 
    } catch (error) {

      Swal.fire({
        icon: "error",
        title: 'Duplicate entry',
        text: error.response?.data?.message || "User has already account",
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
              type="email"
              placeholder="Enter Your Email"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
              required
              {...register("email")}
            />
          </div>

          {/* password */}
          <div className="my-5 relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter 5 digits PIN"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
              required
              {...register("pin")}
            />
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <Icon.EyeOff /> : <Icon.Eye />}
            </div>
          </div>

          {/* mobile */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
              required
              {...register("phone")}
            />
          </div>

          {/* NID */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Enter NID"
              className="w-full py-4 px-3 border border-gray-200 rounded outline-0"
              required
              {...register("nid")}
            />
          </div>

          {/* type */}
          <div className="my-10">
            <label for="cars" className="w-full text-lg">
              Choose Account Type :
            </label>
            <select
              name="account"
              className="ml-4 py-2 px-4 border border-gray-300 rounded cursor-pointer outline-0"
              {...register("role")}
            >
              <option value="user"> User </option>
              <option value="agent"> Agent </option>
            </select>
          </div>

          {btnDisabled ? (
            ""
          ) : (
            <button
              className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5"
              disabled={btnDisabled}
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
