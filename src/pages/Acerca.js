import { useState } from "react";
import ProfileImg from "../components/ProfileImg";
import BotonTextos from "../components/BotonTextos";
import TextoProgramador from "../components/TextoProgramador";
import TextoFilosofo from "../components/TextoFilosofo";

function Acerca() {
  const [showProg, setShowProg] = useState(true);
  const [showFil, setShowFil] = useState(false);

  const handleProgClick = () => {
    setShowFil(false);
    setShowProg(true);
  };

  const handleFilClick = () => {
    setShowFil(true);
    setShowProg(false);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full sm:w-2/3	p-6 grid grid-cols-1 md:grid-cols-3 bg-blue-100 border-2 rounded shadow-lg">
        <ProfileImg />
        <div className="col-span-1 md:col-span-2">
          <p className="text-xl font-bold text-center text-blue-600 pb-2">
            Mi recorrido como...
          </p>
          <div className="flex flex-col pl-6 mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-x-4">
              <BotonTextos text="Programador" handleClick={handleProgClick} />
              <BotonTextos text="Filósofo" handleClick={handleFilClick} />
            </div>
            {showProg && <TextoProgramador />}
            {showFil && <TextoFilosofo />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
