import { useEffect } from "react";
import TypedText from "../components/Home/TypedText";
import BotonCV from "../components/Home/BotonCV";
import Avatar from "../components/Home/Avatar";
import Flip from "react-reveal/Flip";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-full justify-center items-center text-center ">
      <Flip bottom>
        <Avatar />
      </Flip>
      <TypedText />
      <BotonCV />
    </div>
  );
}

export default Home;
