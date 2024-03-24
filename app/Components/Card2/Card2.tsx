import React, { useContext } from "react";
import { context } from "@/app/lib/utlis";

const Card2 = (props: any) => {
  const [state, setstate] = useContext(context);
  return (
    <div
      className={`w-max p-2 ${
        state ? "bg-[#ffffff] text-[#000000]" : "bg-[#3B3E47]"
      } `}
      style={{ boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="">
        <img
          src={props.data.img}
          alt="Advertisementimg"
          className="w-[200px] h-[370px]"
        />
      </div>
      <div className="relative">
        <hr
          className={`mt-4 after:content-[''] before:content-[''] ${
            state
              ? "after:bg-[#ededee] before:bg-[#ededee]"
              : "after:bg-[#292B32] before:bg-[#292B32]"
          } after:absolute before:absolute before:right-[-17px] after:top-[-10px] before:top-[-10px] after:rounded-[15px] before:rounded-[15px] after:left-[-20px] after:w-[20px] after:h-[20px] before:h-[20px] before:w-[20px]`}
          style={{
            height: "1.5px",
            backgroundImage:
              "linear-gradient(90deg, #818A97, #818A97 75%, transparent 20%, transparent 10%)",
            backgroundSize: "15px 1px",
            border: "none",
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`text-[16px] flex items-center justify-center ${
            state ? "font-normal" : "font-semibold"
          } mt-3 mb-1`}
        >
          <h1>{props.data.title}</h1>
        </div>
        <div
          className={`flex items-center justify-center text-[14px] gap-1 uppercase ${
            state ? "font-normal" : "font-thin"
          }`}
        >
          <span>Oct 15</span>|<span>Sun</span>|<span>4:30 PM</span>
        </div>
        <div className="w-auto text-[12.5px] flex items-center justify-between">
          <p
            className={`w-[200px] text-center ${
              state ? "font-normal" : "font-light"
            }`}
          >
            {props.data.para}
          </p>
        </div>
        <div className="text-[13px] flex items-center justify-center">
          <button className="bg-[#000000] text-[#ffffff] w-[90%] pt-2 pb-2 pl-4 pr-4">
            Take Flight Collection
            {state && <p>Moahodh</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
