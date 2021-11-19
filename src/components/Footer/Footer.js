import GithubButton from "../Social/GithubButton";
import LinkedinButton from "../Social/LinkedinButton";

const Footer = ({ currentPage }) => {
  return (
    <div
      className={`${
        currentPage === "Contacto" ? "hidden" : "flex"
      } ml-5 px-3 pb-2  gap-5`}
    >
      <GithubButton />
      <LinkedinButton />
    </div>
  );
};

export default Footer;
