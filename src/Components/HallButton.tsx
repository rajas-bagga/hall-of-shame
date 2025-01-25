import React from "react";

const HallButton = () => {
  return (
    <div className="h-18 w-full rounded-md bg-pink-600 mb-2">
      <div className="flex justify-start items-center w-full h-full px-1">
        <div className="m-w-1/3 w-1/3 h-full py-1 rounded-md pr-1 flex-shrink-0">
          <img
            src="https://static.euronews.com/articles/stories/09/00/26/84/1200x675_cmsv2_5ab56c14-27b4-5b01-8d4f-5a2e91f2b20f-9002684.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full h-full flex justify-center items-center text-white text-center pr-0.5 font-mono">
            Putin's hall
        </div>
      </div>
    </div>
  );
};

export default HallButton;
