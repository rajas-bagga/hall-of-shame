const HallButton = ({ selected = false, onClick, hallName }) => {
  return (
    <>
      {selected ? (
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
              {hallName}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="h-18 w-full rounded-md mb-2 border-2 border-pink-600 shadow-l shadow-pink-600 hover:bg-pink-600 cursor-pointer"
          onClick={onClick}
        >
          <div className="flex justify-start items-center w-full h-full px-1">
            <div className="m-w-1/3 w-1/3 h-full py-1 rounded-md pr-1 flex-shrink-0">
              <img
                src="https://static.euronews.com/articles/stories/09/00/26/84/1200x675_cmsv2_5ab56c14-27b4-5b01-8d4f-5a2e91f2b20f-9002684.jpg"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-full flex justify-center items-center text-white text-center pr-0.5 font-mono">
              {hallName}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HallButton;
