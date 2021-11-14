// import AwesomeSlider from "react-awesome-slider";
// import withCaption from "react-awesome-slider/dist/captioned";
// import "react-awesome-slider/dist/styles.css";
// import CaptionedStyles from "react-awesome-slider/dist/captioned.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProyectSlider = ({ images, sliderWidth }) => {
  // const CaptionedSlider = withCaption(AwesomeSlider);

  return (
    <Carousel showThumbs={false} width={sliderWidth}>
      {images.map((e) => (
        <div key={e.caption}>
          <img className="object-cover" src={e.img} alt={e.caption} />
          <p className="legend">{e.caption}</p>
        </div>
      ))}
    </Carousel>
    // <AwesomeSlider cssModule={AwsSliderStyles}>
    //   {images.((e) => (
    //     <div key={e.caption} data-src={e.img}>
    //       <p>{e.caption}</p>
    //     </div>
    //   ))}
    // </AwesomeSlider>
    // <CaptionedSlider>
    //   startupScreen={StartupScreen}
    //   cssModule={CaptionedStyles}
    //   screens=
    //   {images.map((e) => ({
    //     backgroundColor: "#4a9c8c",
    //     media: e.img,
    //     caption: e.caption,
    //   }))}
    // </CaptionedSlider>
  );
};

export default ProyectSlider;
