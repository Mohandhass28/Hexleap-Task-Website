"use client";
import React, { useContext } from "react";
import { context, Context } from "@/app/lib/utlis";

const AdvertisementCard = (props: any) => {
  let state = props.state
  return (
    <div
      className={`w-max p-2 ${
        state ? "bg-[#ffffff] text-[#3B3E47]" : "bg-[#3B3E47] text-[#ffffff]"
      }`}
      style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="">
        <img
          src="./Images/f71497e0e3af85c77fa47046bb1f23cb.jpg"
          alt="Advertisementimg"
          className="w-[200px] h-[190px]"
        />
      </div>
      <div className="text-[16px] font-semibold mt-5 mb-1">
        <h1>Advertisement title</h1>
      </div>
      <div className="w-auto text-[12.5px]">
        <p className="w-[200px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
