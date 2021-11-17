import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="px-3 pb-2 flex ">
      <a
        className="bg-gray-500 hover:bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center mx-5 z-50"
        href="https://github.com/JAMorello"
        rel="noopener noreferrer"
        aria-label="Github"
        target="_blank"
      >
        <BsGithub className="h-6 w-6" />
      </a>
      <a
        className="bg-green-600 hover:bg-green-400 rounded-full h-12 w-12 flex items-center justify-center z-50"
        rel="noopener noreferrer"
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/juan-agust%C3%ADn-morello-a46385184/"
        target="_blank"
      >
        <BsLinkedin className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
