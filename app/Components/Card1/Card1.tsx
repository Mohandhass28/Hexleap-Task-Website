import React, { useContext } from "react";
import { Card1Type } from "../../lib/Typs";
import { context } from "@/app/lib/utlis";

const Card1 = ({ data }: Card1Type) => {
  const [state, setstate] = useContext(context);
  return (
    <div
      className={`w-max p-2 ${state ? "bg-[#ffffff]" : "bg-[#3B3E47]"}`}
      style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="">
        <img
          src={data.img}
          alt=""
          className="w-[200px] h-[360px] object-cover"
        />
      </div>
      <div className="text-[16px] font-semibold mt-1 mb-1">
        <h1 className={state ? "text-[#000000]" : "text-[#ffffff]"}>
          {data.title}
        </h1>
      </div>
      <div
        className={`flex items-center justify-normal gap-5 font-semibold ${
          state ? "bg-[#ffffff] text-[#000000]" : "bg-[#292B32] text-[#ffffff]"
        } p-1`}
      >
        <div className={`text-[12px] flex flex-col ${state ? 'font-sans':'font-thin'} ml-2`}>
          <span>Total Events</span>
          <span className="text-[13px]">
            <strong>{data.total_Event}</strong>
          </span>
        </div>
        <div className={`text-[12px] flex flex-col ${state ? 'font-sans':'font-thin'}`}>
          <span>sport</span>
          <span className="text-[13px]">
            <strong>{data.sport}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
