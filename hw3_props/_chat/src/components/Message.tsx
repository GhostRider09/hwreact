import {TItemProperties} from "../Types.ts"

const Message = ({from, message}: TItemProperties) => {
  let {id, time, text} = message;

  return (
    <li className="clearfix" data-id={id}>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>&nbsp;{from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text || "-"}</div>
    </li>   
  )
}

export default Message