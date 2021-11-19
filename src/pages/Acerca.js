import { useEffect } from "react";
import Conocimientos from "../components/Skills/Conocimientos";
import ProfileCard from "../components/About/ProfileCard";

const Acerca = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("Acerca");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-5">
        Acerca de mí
      </h2>
      <Conocimientos />
      <ProfileCard />
    </div>
  );
};

export default Acerca;
