const SkillIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center w-20 h-20 lg:w-24 lg:h-24 ">
      {icon}
      <p className="mt-2 text-center text-white font-bold">{name}</p>
    </div>
  );
};

export default SkillIcon;
