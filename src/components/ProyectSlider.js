import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ProyectSlider = ({ images }) => {
  return (
    <AwesomeSlider>
      {images.map((e) => (
        <div data-src={e} />
      ))}
    </AwesomeSlider>
  );
};

export default ProyectSlider;
