import React from "react";
import Heading from "../../Shared/Heading/Heading";
import { useForm } from "react-hook-form";

const CashOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};
  return (
    <div>
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

          <button className="btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full my-5 font-bold">
            Cash Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashOut;
