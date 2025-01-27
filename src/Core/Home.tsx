/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./Home.css";
import HallButton from "../Components/HallButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../Components/PostCard";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#121212" }}
        className="flex h-screen justify-between text-white"
      >
        <div className="min-w-60 w-60 border-r-1 border-r-gray-300 hidden md:block flex-col justify-start align-middle p-1.5 mt-1.5">
          <div className="w-full text-xl text-center mb-4">Place for logo</div>
          {[0, 1, 2, 3].map((index) => (
            <HallButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => handleSelect(index)}
              hallName={`Hall ${index + 1}`}
            />
          ))}
        </div>

        <div className="w-full flex-col justify-center items-center h-screen overflow-y-auto mr-1 pb-12">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          
          <NavBar selected={2} />
          
        </div>

        <div className="w-60 min-w-50 flex-col justify-start items-center h-screen hidden md:flex">
          <div className="w-full h-30 flex justify-between items-center mt-1 pr-1.5">
            {/* <div className="bg-purple-600 w-full h-10 rounded-md text-center flex justify-center align-middle items-center hover:bg-purple-500 cursor-pointer">
              Henlo World
            </div> */}
            <div className="bg-purple-600 w-[48%] aspect-square rounded-md flex flex-col justify-center align-middle items-center hover:bg-purple-500 cursor-pointer">
              <FontAwesomeIcon icon={faGear} size="2xl" className="mt-2" />
              <p className="text-sm">Hall Settings</p>
            </div>
            <div className="bg-purple-600 w-[48%] aspect-square rounded-md flex flex-col justify-center align-middle items-center hover:bg-purple-500 cursor-pointer">
              <FontAwesomeIcon icon={faUser} size="2xl" className="mt-2" />
              <p className="text-sm">User Settings</p>
            </div>
          </div>

          <div className="w-full flex pr-1.5">
            <div className="bg-purple-600 w-full h-18 rounded-md text-center flex flex-col justify-center align-middle items-center hover:bg-purple-500 cursor-pointer">
              <FontAwesomeIcon icon={faCamera} size="2xl" className="mt-2" />
              ShameShare
            </div>
          </div>

          <div className="flex justify-start w-full items-center mt-1">
            <input
              placeholder="Search for hall"
              type="text"
              className="border-1 w-6/7 rounded-md h-10 pl-1.5 mt-1 mr-1 pl focus:border-pink-600 focus:border-2 focus:outline-none"
            />
            <button className="w-1/7 mt-0.5 text-3xl h-10 border-pink-600 border-2 rounded-md mr-1 cursor-pointer transition hover:bg-pink-600 duration-500 ease-in-out">
              {/* ⌕ */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                // size="lg"
                size="xs"
                className="ml-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
