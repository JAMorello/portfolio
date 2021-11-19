import { useEffect } from "react";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

const Contacto = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("Contacto");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase underline text-right mb-10">
        Contacto
      </h2>
      <div className="w-full sm:max-w-3xl p-6 grid grid-cols-1 md:grid-cols-5  bg-blue-100 border-2 rounded shadow-lg">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
