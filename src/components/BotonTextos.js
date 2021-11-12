const BotonTextos = ({ text, handleClick }) => {
  return (
    <button
      className={`p-2 mb-4 z-50 text-xl font-bold text-center text-white  rounded-lg border-r-4 border-b-4 ${
        text === "Programador"
          ? "bg-blue-700 border-blue-800 hover:bg-blue-800 hover:border-blue-900"
          : "bg-green-700 border-green-800 hover:bg-green-800 hover:border-green-900"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BotonTextos;
