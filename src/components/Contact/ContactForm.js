import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { sendForm } from "./ContactToast";
import FieldWrapper from "./FieldWrapper";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvodellp");

  useEffect(() => {
    if (state.submitting) {
      if (state.succeeded) {
        sendForm(true);
      }
      if (state.errors.length !== 0) {
        sendForm(false);
      }
    }
  }, [state]);

  return (
    <form
      onSubmit={handleSubmit}
      className="col-span-1 md:col-span-3  order-1 md:order-2 pb-4 pl-0 md:pb-0 md:pl-4 z-40"
    >
      <div className="flex flex-col justify-center gap-5">
        <FieldWrapper form={true}>
          <label
            htmlFor="full-name"
            className="block col-span-1 text-gray-700 text-sm font-bold"
          >
            Nombre
          </label>
          <input
            className="col-span-2 md:col-span-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="full-name"
            type="text"
            name="name"
            required
          ></input>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </FieldWrapper>
        <FieldWrapper form={true}>
          <label
            htmlFor="email"
            className="block col-span-1 text-gray-700 text-sm font-bold"
          >
            Correo Electrónico
          </label>
          <input
            className="col-span-2 md:col-span-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FieldWrapper>
        <FieldWrapper form={true}>
          <label
            htmlFor="message"
            className="block col-span-1 text-gray-700 text-sm font-bold"
          >
            Mensaje
          </label>
          <textarea
            className="col-span-2 md:col-span-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FieldWrapper>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
