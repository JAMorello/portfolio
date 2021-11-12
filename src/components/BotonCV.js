import CV from "../assets/morello-juan-agustin-cv.pdf";

function BotonCV() {
  return (
    <a
      href={CV}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 py-2 px-4 bg-yellow-500 hover:bg-red-500 z-50 text-xl rounded"
    >
      Ver CV
    </a>
  );
}

export default BotonCV;
