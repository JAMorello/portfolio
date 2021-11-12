import TypedText from "../components/TypedText";
import BotonCV from "../components/BotonCV";
import Avatar from "../components/Avatar";

function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center ">
      <Avatar />
      <TypedText />
      <BotonCV />
    </div>
  );
}

export default Home;
