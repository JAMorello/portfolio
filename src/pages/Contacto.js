import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-5">
        Contacto
      </h2>
    </div>
  );
};

export default Contacto;
