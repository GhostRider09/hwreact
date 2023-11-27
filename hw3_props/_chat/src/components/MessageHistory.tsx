import Message from "./Message.tsx"
import Response from "./Response.tsx"
import Typing from "./Typing.tsx"
import {TMessageItem} from "../Types.ts"

type TMessageHistoryProps = {
  list: TMessageItem[]
}

const MessageHistory = ({list}: TMessageHistoryProps) => {
  if ( !list || !list.length ) {
    return (<></>);
  }

  return (
    <ul>
      {list.map((messageItem, idx) => {
        let {from, type: messageType, ...message} = messageItem;

        if ( messageType === "message" ) {          
          return <Message from={from} message={message} key={idx} />
        } else if ( messageType === "response" ) {
          return <Response from={from} message={message} key={idx} />
        } else if ( messageType === "typing" ) {
          return <Typing from={from} message={message} key={idx} />
        }
      })}
    </ul>
  );
}

export default MessageHistory