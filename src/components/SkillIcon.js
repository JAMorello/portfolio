const SkillIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center w-24 h-24 ">
      {icon}
      <p className="mt-2 text-center text-white font-bold">{name}</p>
    </div>
  );
};

export default SkillIcon;
