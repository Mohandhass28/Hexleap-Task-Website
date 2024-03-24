"use client";
import { createContext, useRef, useState } from "react";
import AdvertisementCard from "./Components/AdvertisementCard/AdvertisementCard";
import Card1 from "./Components/Card1/Card1";
import { Card1Data } from "./lib/Data";
import { Card2Data } from "./lib/Data";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Card2 from "./Components/Card2/Card2";
import { FaRegSun } from "react-icons/fa";
import { context } from "./lib/utlis";

const Home = () => {
  const cardcontainer = useRef(null);
  const MoveRight = () => {
    cardcontainer.current.scrollLeft += 220;
  };
  const MoveLeft = () => {
    cardcontainer.current.scrollLeft -= 220;
  };

  const [state, setstate] = useState(false);
  const handle = () => {
    setstate(!state);
  };
  const background = state ? "bg-[#ededee] h-lvh" : "bg-[#292B32] h-lvh";
  const backgroundforIcon = state
    ? "text-[#292B32] cursor-pointer"
    : " text-[#ededee] cursor-pointer";
  const textcolor = state ? "text-[#292B32]" : " text-[#ededee]";
  return (
    <context.Provider value={[state, setstate]}>
      <div className={background}>
        <div className="flex justify-center items-center pt-10 ">
          <div className="flex flex-col w-[80%] max-[500px]:items-center max-[500px]:justify-center">
            <div className="flex justify-between">
              <div className="mb-4 w-fit">
                <h1
                  className={
                    state
                      ? "text-[#292B32] after:content-[' '] after:bg-[#738FFF] after:flex after:w-[100%] after:h-[2px] font-bold"
                      : "text-[#FFFFFF] after:content-[' '] after:bg-[#738FFF] after:flex after:w-[100%] after:h-[2px] font-bold"
                  }
                >
                  Sports
                </h1>
              </div>
              <div className="">
                <FaRegSun onClick={handle} className={backgroundforIcon} />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap max-[500px]:items-center max-[500px]:justify-center">
              {Card1Data.map((data, id) => {
                return <Card1 key={id} data={data} />;
              })}
              <AdvertisementCard />
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <button className="bg-[#2C9CF0] pt-[10px] pr-[30px] pb-[10px] pl-[30px]">
                Show More
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            state
              ? "bg-[#ededee] flex items-center justify-center flex-col"
              : "bg-[#292B32] flex items-center justify-center flex-col"
          }
        >
          <div className="">
            <h1
              className={
                state
                  ? "text-[#000000] text-[45px] font-bold mb-2 mt-2 max-[430px]:text-[30px]"
                  : "text-[45px] font-bold mb-2 mt-2 max-[430px]:text-[30px]"
              }
            >
              Collection Spotlight
            </h1>
          </div>
          <div
            className={
              state
                ? "text-[#000000] w-fit text-[14px] text-center mb-5"
                : "w-fit text-[14px] text-center mb-5"
            }
          >
            <p>
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className=" flex relative max-[1100px]:w-full max-[600px]:w-[calc(120%_/_1)] items-center justify-center mb-10">
            <div
              ref={cardcontainer}
              className="flex gap-4 w-[calc(120%_/_2)] object-fill transition ease-linear delay-700 max-[1000px]:w-[calc(80%_/_2)] overflow-hidden pb-5"
            >
               {Card2Data.map((data, id) => {
                return <Card2 key={id} data={data} />;
              })}
            </div>
            <div className="cursor-pointer absolute w-[30px] h-[45px] flex items-center justify-center text-[#2C9CF0] left-16 border-2 border-[#2C9CF0]">
              <FaAngleLeft onClick={MoveLeft} />
            </div>
            <div className="cursor-pointer absolute w-[30px] h-[45px] flex items-center justify-center text-[#2C9CF0] right-16 border-2 border-[#2C9CF0]">
              <FaAngleRight onClick={MoveRight} />
            </div>
          </div>
        </div>
      </div>
    </context.Provider>
  );
};

export default Home;
