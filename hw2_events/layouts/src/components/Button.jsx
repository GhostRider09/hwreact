const Button = ({label}) => {
  return (
    <button className="btn">
      {label}
      <span className="bg"/>
    </button>
  );
};

export default Button;