import { Link } from "react-router-dom";
import Divider from "./Divider";

const NavLinks = ({ mobile, linkClicked }) => {
  const mobileStyles =
    "fixed flex-col py-4 justify-center items-center gap-3 text-gray-200 text-2xl inset-0 z-50";

  const normalStyles = "align-content-around text-gray-500 text-lg";

  return (
    <div
      className={`flex ${mobile ? mobileStyles : normalStyles}`}
      style={{ backgroundColor: "#080F19" }}
      onClick={linkClicked}
    >
      <Link to="/" className="hover:text-gray-200">
        00 : Inicio
      </Link>
      {mobile ? null : <Divider />}
      <Link to="/acerca" className="hover:text-gray-200">
        01 : Acerca de mí
      </Link>
      {mobile ? null : <Divider />}
      <Link to="/proyectos" className="hover:text-gray-200">
        02 : Proyectos
      </Link>
      {mobile ? null : <Divider />}
      <Link to="/contacto" className="hover:text-gray-200">
        03 : Contacto
      </Link>
    </div>
  );
};

export default NavLinks;
