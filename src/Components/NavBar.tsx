import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({selected=1}) => {
  return (
    <div
      style={{ backgroundColor: "#121212"}}
      className="md:hidden fixed bottom-0 w-full border-[0.25px] border-gray-500 text-center p-2 h-12 flex justify-around items-center"
    >
        {selected == 1? <FontAwesomeIcon icon={faHouse} size="xl" className="text-pink-600" />: <FontAwesomeIcon icon={faHouse} size="xl" />}
        {selected == 2? <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-pink-600" />: <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />}
        {selected == 3? <FontAwesomeIcon icon={faGear} size="xl" className="text-pink-600" />: <FontAwesomeIcon icon={faGear} size="xl" />}
        {selected == 4? <FontAwesomeIcon icon={faUser} size="xl" className="text-pink-600" />: <FontAwesomeIcon icon={faUser} size="xl" />}
        {selected == 5? <FontAwesomeIcon icon={faCamera} size="xl" className="text-pink-600" />: <FontAwesomeIcon icon={faCamera} size="xl" />}
      {/* <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      <FontAwesomeIcon icon={faGear} size="xl" />
      <FontAwesomeIcon icon={faUser} size="xl" />
      <FontAwesomeIcon icon={faCamera} size="xl" /> */}
    </div>
  );
};

export default NavBar;
