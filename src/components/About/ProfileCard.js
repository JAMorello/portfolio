import { useState } from "react";
import ProfileImg from "./ProfileImg";
import BotonTextos from "./BotonTextos";
import TextoProgramador from "./TextoProgramador";
import TextoFilosofo from "./TextoFilosofo";

const ProfileCard = () => {
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
    <div className="w-full sm:w-2/3	p-6 grid grid-cols-1 md:grid-cols-3 bg-blue-100 border-2 rounded shadow-lg">
      <ProfileImg />
      <div className="col-span-1 md:col-span-2">
        <p className="text-2xl mt-6 md:mt-0 font-bold text-center text-blue-600 pb-0 sm:pb-2">
          Mi recorrido como...
        </p>
        <div className="flex flex-col pl-0 px-0 sm:px-2 md:pl-6 mt-5 md:mt-0">
          <div className="grid grid-cols-2 gap-x-4">
            <BotonTextos
              text="Programador"
              active={showProg}
              handleClick={handleProgClick}
            />
            <BotonTextos
              text="Filósofo"
              active={showFil}
              handleClick={handleFilClick}
            />
          </div>
          {showProg && <TextoProgramador />}
          {showFil && <TextoFilosofo />}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
