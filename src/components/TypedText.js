import Typed from "react-typed";

const TypedText = () => {
  return (
    <div className="tracking-tighter sm:tracking-widest font-bold">
      <h1 className="text-blue-300 text-2xl sm:text-3xl md:text-4xl z-50">
        <Typed strings={["Juan Agustín Morello"]} typeSpeed={40} />
      </h1>
      <h2 className="text-gray-300 text-xl sm:text-2xl md:text-3xl uppercase z-50">
        <Typed
          strings={["Frontend Developer", "React Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h2>
    </div>
  );
};

export default TypedText;
