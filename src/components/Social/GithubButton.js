import { BsGithub } from "react-icons/bs";

const GithubButton = () => {
  return (
    <a
      className="bg-gray-500 hover:bg-gray-400 rounded-full h-12 w-12 flex items-center justify-center z-40"
      href="https://github.com/JAMorello"
      rel="noopener noreferrer"
      aria-label="Github"
      target="_blank"
    >
      <BsGithub className="h-6 w-6" />
    </a>
  );
};

export default GithubButton;
