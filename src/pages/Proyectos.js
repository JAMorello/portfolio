import proyectos from "../proyectos/proyectos";
import ProyectoCard from "../components/ProyectoCard";

const Proyectos = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-5">
        Proyectos
      </h2>
      {proyectos.map((e) => (
        <ProyectoCard key={e.name} proyecto={e} />
      ))}
    </div>
  );
};

export default Proyectos;
