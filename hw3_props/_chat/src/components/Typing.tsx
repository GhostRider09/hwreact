import {TItemProperties} from "../Types.ts"

const Typing = ({from, message}: TItemProperties) => {
  let {id, time} = message;

  return (
    <li className="clearfix" data-id={id}>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>&nbsp;{from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online" style={{color: '#AED2A6'}}></i>
      <i className="fa fa-circle online" style={{color: '#DAE9DA'}}></i>
    </li>   
  )
}

export default Typing