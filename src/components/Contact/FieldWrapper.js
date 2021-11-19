const FieldWrapper = (props) => {
  return (
    <div
      className={`p-3 border-2 border-blue-300 grid ${
        props.form ? "grid-cols-3" : "grid-cols-5"
      } md:grid-cols-5 items-center rounded-lg`}
    >
      {props.children}
    </div>
  );
};

export default FieldWrapper;
