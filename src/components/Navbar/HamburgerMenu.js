import { useState } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("disable-scroll")) {
      body.classList.remove("disable-scroll");
    } else {
      body.classList.add("disable-scroll");
    }
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <div className={`${toggleMenu ? "hidden" : "block"}`}>
        <button
          className="fixed bottom-4 right-4 bg-yellow-400 text-yellow-700 border-2 border-yellow-700 rounded-full h-12 w-12 flex items-center justify-center z-50"
          onClick={handleClick}
        >
          <GiHamburgerMenu className="h-8 w-8" />
        </button>
      </div>
      <div className={`${toggleMenu ? "block" : "hidden"}`}>
        <NavLinks mobile={true} linkClicked={handleClick} />
        <button
          className="fixed bottom-4 right-4 bg-red-700 text-white rounded-full h-12 w-12 flex items-center justify-center z-50"
          onClick={handleClick}
        >
          <IoCloseSharp className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
