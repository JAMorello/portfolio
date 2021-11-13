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
  const skills = [
    {
      name: "HTML 5",
      icon: <SiHtml5 className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "CSS 3",
      icon: <SiCss3 className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "React.js",
      icon: <SiReact className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Bootstrap 5",
      icon: <SiBootstrap className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Python",
      icon: <SiPython className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "R",
      icon: <SiR className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "MySql",
      icon: <SiMysql className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "PostgreSql",
      icon: <SiPostgresql className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Git",
      icon: <SiGit className="w-16 h-16 text-gray-400" />,
    },
    {
      name: "Scrum",
      icon: <SiScrumalliance className="w-16 h-16 text-gray-400" />,
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
