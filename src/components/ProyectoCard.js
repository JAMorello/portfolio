import Flip from "react-reveal/Flip";
import BotonesProyecto from "./BotonesProyecto";

const ProyectoCard = ({ proyecto, setCurProyecto, setShowModal }) => {
  return (
    <Flip left>
      <div className="w-1/3 bg-transparent antialiased text-gray-900 rounded-lg">
        <img
          className="w-full object-cover object-center rounded-lg shadow-md"
          src={proyecto.img}
          alt={proyecto.name}
        />
        <div className="relative px-4 -mt-24">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="mt-1 text-xl font-semibold uppercase leading-tight ">
              {proyecto.name}
            </h3>
            <p className="mt-1 text-justify">{proyecto.text}</p>
            <BotonesProyecto
              proyecto={proyecto}
              setCurProyecto={setCurProyecto}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ProyectoCard;
