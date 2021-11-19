const IconWrapper = (props) => {
  return (
    <div className="bg-blue-300 rounded-lg h-10 w-10 flex items-center justify-center mr-3">
      {props.children}
    </div>
  );
};

export default IconWrapper;
