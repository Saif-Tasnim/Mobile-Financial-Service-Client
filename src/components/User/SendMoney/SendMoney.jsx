import React, { useContext } from "react";
import Heading from "../../Shared/Heading/Heading";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { JWT_CONFIG } from "../../../config/jwt_auth";

const SendMoney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    if (data.receiver_phone.length !== 11) {
      Swal.fire({
        icon: "error",
        title: `Error`,
        text: "Phone number is not valid",
      });
      return;
    }

    if(data.amount > user.balance){
        Swal.fire({
            icon: "error",
            title: `Error`,
            text: "Insuffiecient balance",
          });
          return;
    }

    if(data.amount >= 100 && data.amount+5 > user.balance){
        Swal.fire({
            icon: "error",
            title: `Error`,
            text: "Insuffiecient balance",
          });
          return;
    }

    const { phone } = user;

    const totalData = {
      sender_phone: phone,
      receiver_phone: data.receiver_phone,
      amount: data.amount,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/user/send-money",
        totalData,
        JWT_CONFIG
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Error occured`,
        text: "Money Transaction is not succeed",
      });
    }
  };

  return (
    <div>
      <Heading title="Send Money" />

      <div className="flex justify-center my-5">
        {user?.balance < 50 ? (
          <div className="text-cancel text-head-2 font-bold">
            {" "}
            You have insuffiecient balance. For Send Money, minimum amount need
            Tk. 50{" "}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 my-5">
              <label htmlFor=""> Receiver Phone Number </label>
              <input
                type="text"
                required
                {...register("receiver_phone")}
                className="px-2 py-4 border border-gray-200 rounded-md outline-0"
              />
            </div>

            <div className="flex flex-col gap-4 my-5">
              <label htmlFor="">Amount </label>
              <input
                type="number"
                required
                {...register("amount")}
                className="px-2 py-4 border border-gray-200 rounded-md outline-0"
              />
            </div>

            <button className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full my-5 font-bold">
              Send Money
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
