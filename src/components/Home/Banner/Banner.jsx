import React from "react";
import banner from "../../../assets/6617.jpg";

const Banner = () => {
  return (
    <div className="h-screen flex pt-20 bg-indigo-50">
      <div className="w-1/2">
        <div className="pt-32 pb-16 mx-16 italic flex flex-col gap-1">
          <span className="text-pending text-big font-extrabold">
            Your Money's
          </span>{" "}
          <br />
          <span className="text-primary text-big font-extrabold">
            Bestie on the Go!
          </span>
        </div>
        <p className="mx-16 text-lg italic">
          <span>Never fear, your cash's best friend is here!</span> <br />
          <span>
            With Pocket Pal, managing your money is as easy as a stroll in the
            park
          </span>
        </p>

        <button className="bg-pending text-white text-lg px-5 py-3 rounded-lg ml-24 mt-16">
          Get Started
        </button>
      </div>

      <div className="w-1/2">
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Banner;
