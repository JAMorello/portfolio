import profile from "../../assets/profile.jpg";
import Flip from "react-reveal/Flip";

const ProfileImg = () => {
  return (
    <Flip left>
      <img className="" src={profile} alt="Juan Agustín Morello" />
    </Flip>
  );
};

export default ProfileImg;
