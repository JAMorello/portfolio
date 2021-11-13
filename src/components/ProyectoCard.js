import Flip from "react-reveal/Flip";

const ProyectoCard = ({ proyecto }) => {
  return (
    <Flip left>
      <div className="w-1/3 grid grid-rows-3 grid-cols-3">
        <img
          className="row-span-3 col-span-1"
          src={proyecto.img}
          alt={proyecto.name}
        />
      </div>
      <h3 className="row-span-1 col-span-2">{proyecto.name}</h3>
      <p className="row-span-1 col-span-2">{proyecto.text}</p>
      <div className="row-span-1 col-span-2">
        <div className="flex gap-4">
          <button className="bg-green-500">Demo</button>
          <button className="bg-red-500">Code</button>
        </div>
      </div>
    </Flip>
  );
};

export default ProyectoCard;
