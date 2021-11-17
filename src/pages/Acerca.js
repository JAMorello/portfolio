import Conocimientos from "../components/Skills/Conocimientos";
import ProfileCard from "../components/About/ProfileCard";

function Acerca() {
  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-5">
        Acerca de mí
      </h2>
      <Conocimientos />
      <ProfileCard />
    </div>
  );
}

export default Acerca;
