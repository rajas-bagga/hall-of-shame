/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const PostCard = () => {
  return (
    <>
      <div className="text-xl text-center mt-6 max-w-full w-100 m-auto rounded-md shadow-lg">
        <div className="flex text-3xl h-15 items-center">
          <div className="bg-black h-12 w-12 rounded-full m-2 border-3 border-purple-500">
            <img
              src="https://static.euronews.com/articles/stories/09/00/26/84/1200x675_cmsv2_5ab56c14-27b4-5b01-8d4f-5a2e91f2b20f-9002684.jpg"
              className="rounded-full h-full w-full object-cover"
              alt=""
            />
          </div>

          <div className="font-mono text-xl">Vitamin Protein</div>
        </div>

        <div className="rounded-md">
          <img
            className="rounded-md w-full h-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy-2AF9QUct8T5VkY3VCpq7ghezF5oIZEGg&s"
            alt=""
          />
        </div>
        <div className="flex w-full py-2 justify-between">
          <div className="flex">
            <FontAwesomeIcon
              //<FontAwesomeIcon icon="fa-solid fa-trophy" style={{color: "#d7a904",}} />
              icon={faTrophy}
              size="lg"
              className="ml-2.5 hover:text-gray-400"
            />
            <p className="ml-2 font-mono">200</p>

            <FontAwesomeIcon
              icon={faPenNib}
              size="lg"
              className="ml-6 hover:text-gray-400"
            />
            <p className="ml-2 mr-5 font-mono">108</p>
          </div>
        </div>
        <div className="text-sm text-gray-400 flex items-center mr-4 font-mono font-semibold ml-3 mb-2">
          January 26, 2025
        </div>
        <div className="font-sans flex w-full text-left text-lg pl-3 pr-2 mb-2">
          This is the description of this post, yeeeasfkjlsad fjsad flkjsad
          flkajs Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quidem, totam.
        </div>
        <div className="border-t-[0.5px] border-gray-500"></div>
      </div>
    </>
  );
};

export default PostCard;
