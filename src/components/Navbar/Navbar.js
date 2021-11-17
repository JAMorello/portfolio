import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <>
      <div className=" hidden md:block pt-10 pl-32">
        <NavLinks mobile={false} />{" "}
      </div>
      <div className="block md:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
}

export default Navbar;
