import TypedText from "../components/TypedText";
import BotonCV from "../components/BotonCV";
import Avatar from "../components/Avatar";
import Flip from "react-reveal/Flip";

function Home() {
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
