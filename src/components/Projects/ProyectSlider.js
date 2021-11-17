import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProyectSlider = ({ images, sliderWidth }) => {
  return (
    <Carousel showThumbs={false} width={sliderWidth} infiniteLoop={true}>
      {images.map((e) => (
        <div key={e.caption}>
          <img className="object-cover" src={e.img} alt={e.caption} />
          <p className="legend">{e.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProyectSlider;
