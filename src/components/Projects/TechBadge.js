const TechBadge = ({ tech }) => {
  return (
    <span class="bg-blue-200 text-blue-800 text-xs py-1 px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
      {tech}
    </span>
  );
};

export default TechBadge;
