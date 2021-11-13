import { FaWindowClose } from "react-icons/fa";
import TechBadge from "./TechBadge";
import ProyectSlider from "./ProyectSlider";

const ModalProyecto = ({ curProyecto, showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed flex justify-center items-center inset-0 z-50">
            <div className="relative w-auto max-w-3xl my-6 mx-auto ">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-blue-100 rounded-lg shadow-lg">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-blue-300 rounded-t">
                  <h3 className="text-3xl font-semibold">{curProyecto.name}</h3>
                  <button onClick={() => setShowModal(false)}>
                    <FaWindowClose className="w-8 h-8 text-red-600" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ProyectSlider images={curProyecto.extraImgs} />
                  <div class="flex my-4 gap-2 items-baseline">
                    {curProyecto.technologies.map((e) => (
                      <TechBadge tech={e} />
                    ))}
                  </div>
                  <p className="my-4 text-justify">
                    {curProyecto.extendedText}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalProyecto;
