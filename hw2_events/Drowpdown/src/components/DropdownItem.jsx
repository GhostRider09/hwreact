const DropdownItem = ({id, name, active, onClick}) => {
  return (
    <a href="#" 
      style={{ color: (active ? "#5380F7" : "" )}} 
      data-id={id} 
      onClick={onClick}
    >
        {name}
    </a>
  );
}

export default DropdownItem;