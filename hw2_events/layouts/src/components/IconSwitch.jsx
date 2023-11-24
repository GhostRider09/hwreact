import Icon from './Icon.jsx'

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className="switch-view" onClick={onSwitch}>
      <Icon size={42} name={icon}/>
    </div>
  );
};

export default IconSwitch