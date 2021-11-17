import SkillIcon from "./SkillIcon";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiChakraui,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiR,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiScrumalliance,
} from "react-icons/si";

const Conocimientos = () => {
  const skillStyle = "w-10 h-10 lg:w-16 lg:h-16 text-gray-400";

  const skills = [
    {
      name: "HTML 5",
      icon: <SiHtml5 className={skillStyle} />,
    },
    {
      name: "CSS 3",
      icon: <SiCss3 className={skillStyle} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className={skillStyle} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className={skillStyle} />,
    },
    {
      name: "React.js",
      icon: <SiReact className={skillStyle} />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className={skillStyle} />,
    },
    {
      name: "Bootstrap 5",
      icon: <SiBootstrap className={skillStyle} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className={skillStyle} />,
    },
    {
      name: "Python",
      icon: <SiPython className={skillStyle} />,
    },
    {
      name: "R",
      icon: <SiR className={skillStyle} />,
    },
    {
      name: "MySql",
      icon: <SiMysql className={skillStyle} />,
    },
    {
      name: "PostgreSql",
      icon: <SiPostgresql className={skillStyle} />,
    },
    {
      name: "Git",
      icon: <SiGit className={skillStyle} />,
    },
    {
      name: "Scrum",
      icon: <SiScrumalliance className={skillStyle} />,
    },
  ];

  return (
    <div className="w-full sm:w-2/3 p-4 mb-10 text-center ">
      <h2 className="text-white font-bold text-2xl uppercase mb-10">
        Conocimientos
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {skills.map((e) => {
          return <SkillIcon key={e.name} name={e.name} icon={e.icon} />;
        })}
      </div>
    </div>
  );
};

export default Conocimientos;
