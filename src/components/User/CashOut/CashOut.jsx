import React, { useContext, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { useForm } from "react-hook-form";
import Reverse from "../../Shared/Reverse/Reverse";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Icon } from "../../Shared/Icon/Icon";

const CashOut = () => {
  const { user } = useContext(AuthContext);
  const [btn, setBtn] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setBtn(true);
    if (user?.balance < data.amount) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have not enough money",
      });
      return;
    }

    const { agent_phone, amount, pin } = data;
    const cashOutData = { agent_phone, amount, given_pin: pin, ...user };

    try {
      const res = await axios.post(
        "http://localhost:5000/user/cash-out",
        cashOutData
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Cash Out Successful",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Response Status : ${error.response?.status}`,
        text: error.response?.data?.message,
      });

      setBtn(false);
    }
  };

  return (
    <div>
      <Reverse />
      <Heading title={"Cash Out"}></Heading>

      <div className="flex justify-center my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 my-5">
            <label htmlFor=""> Agent Phone Number </label>
            <input
              type="text"
              required
              {...register("agent_phone")}
              className="px-2 py-4 border border-gray-200 rounded-md outline-0"
            />
          </div>

          <div className="flex flex-col gap-4 my-5">
            <label htmlFor=""> Amount </label>
            <input
              type="number"
              required
              {...register("amount")}
              className="px-2 py-4 border border-gray-200 rounded-md outline-0"
            />
          </div>

          <div className="flex flex-col gap-4 my-5">
            <label htmlFor=""> PIN </label>
            <input
              type="password"
              required
              {...register("pin")}
              className="px-2 py-4 border border-gray-200 rounded-md outline-0"
            />
          </div>

          <button className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full my-5 font-bold text-center">
            {btn ? <Icon.Disc3 className="animate-spin" /> : "Cash Out"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashOut;
