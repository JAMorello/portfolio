import avatar from "../assets/avatar.jpg";

const Avatar = () => {
  return (
    <img
      className="object-cover w-52 h-52 rounded-full mb-4 z-50"
      src={avatar}
      alt="Juan Agustín Morello"
    />
  );
};

export default Avatar;
