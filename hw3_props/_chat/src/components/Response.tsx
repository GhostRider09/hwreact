import {TItemProperties} from "../Types.ts"

const Response = ({from, message}: TItemProperties) => {
  let {id, time, text} = message;

  return (
    <li className="clearfix" data-id={id}>
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{text || "-"}</div>
    </li>   
  )
}

export default Response