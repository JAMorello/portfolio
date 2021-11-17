import { useState, useEffect } from "react";
import proyectos from "../proyectos/proyectos";
import ProyectoCard from "../components/Projects/ProyectoCard";
import ModalProyecto from "../components/Projects/ModalProyecto";

const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [curProyecto, setCurProyecto] = useState(proyectos[0]);
  const [showModal, setShowModal] = useState(false);

  const handleToogleModal = (bool, proyecto = proyectos[0]) => {
    setCurProyecto(proyecto);
    setShowModal(bool);

    const body = document.querySelector("body");
    if (body.classList.contains("disable-scroll")) {
      body.classList.remove("disable-scroll");
    } else {
      body.classList.add("disable-scroll");
    }
  };

  useEffect(() => {}, [showModal]);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-10">
        Proyectos
      </h2>
      <div
        className="flex gap-0 gap-y-5 sm:gap-y-5 sm:gap-5 flex-wrap justify-center"
        style={{ width: "90%" }}
      >
        {proyectos.map((e) => (
          <ProyectoCard
            key={e.name}
            proyecto={e}
            handleToogleModal={handleToogleModal}
          />
        ))}
        <ModalProyecto
          curProyecto={curProyecto}
          showModal={showModal}
          handleToogleModal={handleToogleModal}
        />
      </div>
    </div>
  );
};

export default Proyectos;
