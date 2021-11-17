import CV from "../../assets/morello-juan-agustin-cv.pdf";
import FileIcon from "./FileIcon";

function BotonCV() {
  return (
    <a
      href={CV}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 py-2 px-4 z-40 text-xl border-r-4 border-b-4 bg-yellow-500 border-yellow-600 hover:bg-red-500 hover:border-red-600 rounded"
    >
      <div className="flex text-gray-900">
        <div className="pr-1">
          <FileIcon />
        </div>
        <p className="align-top	">Ver CV</p>
      </div>
    </a>
  );
}

export default BotonCV;
