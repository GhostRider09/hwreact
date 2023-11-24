const Icon = ({ name, size }) => {
  return (
    <i className="material-icons" style={{fontSize: size}}>
      {name}
    </i>
  );
};

export default Icon