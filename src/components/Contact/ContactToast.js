import toast from "react-hot-toast";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

const sendForm = (success) =>
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-blue-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-0.5">
              {success ? (
                <BsFillCheckCircleFill className="h-10 w-10 text-green-600" />
              ) : (
                <BsFillXCircleFill className="h-10 w-10 text-red-600" />
              )}
            </div>

            {success ? (
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Mensaje enviado
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  ¡Gracias por escribir!
                </p>
                <p className="text-sm text-gray-700">
                  Te responderé a la brevedad.
                </p>
              </div>
            ) : (
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Mensaje no enviado
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  ¡Ha ocurrido un error!
                </p>
                <p className="text-sm text-gray-700">
                  Surgió un problema. Volvé a intentar.
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`flex border-l ${
            success ? "border-green-600" : "border-red-600"
          }`}
        >
          <button
            onClick={() => toast.dismiss(t.id)}
            className={`w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 ${
              success
                ? "text-green-600 hover:text-green-500 focus:ring-green-500"
                : "text-red-600 hover:text-red-500 focus:ring-red-500"
            }`}
          >
            Cerrar
          </button>
        </div>
      </div>
    ),
    { id: `${success ? "ok" : "error"}` }
  );

export { sendForm };
