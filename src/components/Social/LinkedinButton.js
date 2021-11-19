import { BsLinkedin } from "react-icons/bs";

const LinkedinButton = () => {
  return (
    <a
      className="bg-green-600 hover:bg-green-500 rounded-full h-12 w-12 flex items-center justify-center z-40"
      rel="noopener noreferrer"
      aria-label="Linkedin"
      href="https://www.linkedin.com/in/juan-agust%C3%ADn-morello-a46385184/"
      target="_blank"
    >
      <BsLinkedin className="h-6 w-6" />
    </a>
  );
};

export default LinkedinButton;
