import React from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";

function Navbar() {
  return (
    <div className="hidden md:block pt-10 pl-32 text-gray-500 text-lg">
      <div className="flex align-content-around">
        <Link to="/" className="hover:text-gray-200">
          00 : Inicio
        </Link>
        <Divider />
        <Link to="/acerca" className="hover:text-gray-200">
          01 : Acerca de mí
        </Link>
        <Divider />
        <Link to="/proyectos" className="hover:text-gray-200">
          02 : Proyectos
        </Link>
        <Divider />
        <Link to="/contact" className="hover:text-gray-200">
          03 : Contacto
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
