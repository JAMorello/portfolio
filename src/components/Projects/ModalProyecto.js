import { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import TechBadge from "./TechBadge";
import ProyectSlider from "./ProyectSlider";

const ModalProyecto = ({
  windowWidth,
  curProyecto,
  showModal,
  handleToogleModal,
}) => {
  const [sliderWidth, setSliderWidth] = useState("300px");

  useEffect(() => {
    switch (true) {
      case windowWidth >= 1440:
        setSliderWidth("600px");
        break;
      case windowWidth <= 425:
        setSliderWidth("300px");
        break;
      default:
        const px = 600 - (1440 - windowWidth) * 0.29;
        setSliderWidth(`${px}px`);
    }
  }, [windowWidth]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed flex justify-center items-center inset-0 z-50 ">
            <div className="relative w-full sm:max-w-2xl max-w-3xl my-6 mx-auto ">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-blue-100 rounded-lg shadow-lg">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-blue-300 rounded-t">
                  <h3 className="text-xl sm:text-3xl font-semibold">
                    {curProyecto.name}
                  </h3>
                  <button onClick={() => handleToogleModal(false)}>
                    <FaWindowClose className="w-8 h-8 text-red-600" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-center items-center">
                    <ProyectSlider
                      className="h-full"
                      images={curProyecto.extraImgs}
                      sliderWidth={sliderWidth}
                    />
                  </div>

                  <div className="flex my-4 gap-2 flex-wrap items-baseline">
                    {curProyecto.technologies.map((e) => (
                      <TechBadge key={e} tech={e} />
                    ))}
                  </div>
                  <span className="my-4 text-xs sm:text-sm text-justify">
                    {curProyecto.extendedText}
                  </span>
                </div>
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
