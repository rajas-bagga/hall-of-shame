import React from "react";
import "./Home.css";
import HallButton from "../Components/HallButton";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#121212" }}
        className="flex h-screen justify-between text-white"
      >
        <div className="min-w-60 w-60 border-r-1 border-r-gray-300 hidden md:block flex-col justify-start align-middle p-1.5 mt-1.5">
          <div className="w-full text-xl text-center mb-4">Place for logo</div>
          <HallButton />
        </div>
        <div className="min-w-100">dfdsfsfasjdfksdhfadslasdfa</div>

        <div className="min-w-60 w-60 flex-col  justify-start items-center h-screen hidden md:flex">
          <div className="w-full text-xl">
            <h1 className="mt-6 text-start">Search for hall</h1>
          </div>

          <div className="flex justify-start w-full items-center">
            <input
              placeholder="Hall Code"
              type="text"
              className="border-1 w-6/7 rounded-md h-10 pl-1.5 mt-1 mr-1 pl focus:border-pink-600 focus:border-2 focus:outline-none"
            />
            <button className="w-1/7 mt-0.5 text-3xl h-10 border-pink-600 border-2 rounded-md mr-1 cursor-pointer transition hover:bg-pink-600 duration-500 ease-in-out">⌕</button>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
