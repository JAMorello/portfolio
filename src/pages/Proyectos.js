import { useState } from "react";
import proyectos from "../proyectos/proyectos";
import ProyectoCard from "../components/ProyectoCard";
import ModalProyecto from "../components/ModalProyecto";

const Proyectos = () => {
  const [curProyecto, setCurProyecto] = useState(proyectos[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-10">
        Proyectos
      </h2>
      <div
        className="flex gap-5 flex-wrap justify-center"
        style={{ width: "90%" }}
      >
        {proyectos.map((e) => (
          <ProyectoCard
            key={e.name}
            proyecto={e}
            setCurProyecto={setCurProyecto}
            setShowModal={setShowModal}
          />
        ))}
        <ModalProyecto
          curProyecto={curProyecto}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Proyectos;
