const BotonTextos = ({ text, handleClick }) => {
  return (
    <button
      className={`p-2 mb-4 z-50 text-xl font-bold text-center text-white  rounded-lg  ${
        text === "Programador"
          ? "bg-blue-700 hover:bg-blue-900"
          : "bg-green-700 hover:bg-green-900"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BotonTextos;
