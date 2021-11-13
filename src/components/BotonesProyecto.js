const BotonesProyecto = ({ proyecto, setCurProyecto, setShowModal }) => {
  const btnStyle =
    "p-2 text-xs font-bold uppercase rounded-lg border-b-2 border-r-2";
  const btnDemo = `${
    proyecto.demoLink
      ? "text-white bg-blue-500 border-blue-600 hover:bg-blue-600 hover:border-blue-700"
      : "text-gray-400 bg-gray-300 border-gray-400 cursor-not-allowed"
  }`;
  const btnCode =
    "text-white bg-green-500 border-green-600 hover:bg-green-600 hover:border-green-700";
  const btnInfo =
    "bg-yellow-500 border-yellow-600 hover:bg-red-500 hover:border-red-600";

  return (
    <div className="mt-4 flex justify-between">
      <div className="flex gap-x-4">
        <a
          className={`${btnDemo} ${btnStyle}`}
          href={proyecto.demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className={`${btnCode} ${btnStyle}`}
          href={proyecto.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
      <button
        className={`${btnInfo} ${btnStyle}`}
        onClick={() => {
          setShowModal(true);
          setCurProyecto(proyecto);
        }}
      >
        + Info
      </button>
    </div>
  );
};

export default BotonesProyecto;
