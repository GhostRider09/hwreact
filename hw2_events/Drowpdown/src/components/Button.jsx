const Button = ({title, onClick}) => {
  return (
    <button data-id="toggle" className="btn" onClick={onClick}>
      <span>{title}</span>
      <i className="material-icons">public</i>
    </button>
  );
}

export default Button;