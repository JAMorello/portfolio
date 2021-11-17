const BotonTextos = ({ text, active, handleClick }) => {
  return (
    <button
      className={`p-2 mb-4 z-50 text-base lg:text-xl font-bold text-center text-white rounded-lg border-r-4 border-b-4 ${
        active ? "border-4" : ""
      }
      ${
        text === "Programador"
          ? `${
              active ? "bg-blue-800" : "bg-blue-600"
            }  border-blue-800 hover:bg-blue-800 hover:border-blue-900`
          : `${
              active ? "bg-green-800" : "bg-green-600"
            }  border-green-800 hover:bg-green-800 hover:border-green-900`
      }
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BotonTextos;
