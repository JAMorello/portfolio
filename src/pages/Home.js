import React from "react";
import BgParticles from "../components/BgParticles";
import avatar from "../assets/avatar.jpg";
import Typed from "react-typed";

function Home() {
  return (
    <div className="w-full h-full">
      <BgParticles />
      <div className="z-10 h-full flex flex-col justify-center items-center text-center ">
        <img
          className="object-cover w-52 h-52 rounded-full mb-4"
          src={avatar}
          alt="Juan Agustín Morello"
        />
        <div>
          <h1 className="text-blue-300 font-bold text-3xl md:text-4xl">
            <Typed strings={["Juan Agustín Morello"]} typeSpeed={40} />
          </h1>
          <h2 className="text-gray-300 font-bold text-2xl md:text-3xl uppercase">
            <Typed
              strings={["Frontend Developer", "React Developer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
