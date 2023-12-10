import DateTime from "./DateTime";
import {formatDistanceToNow} from 'date-fns'
import ru from "date-fns/locale/ru";
import { TDate } from "../Types";

const prettier = (date: string) => {
  const d = new Date(date);
  if ( !d.getTime() ) {
    return "--";
  }

  return formatDistanceToNow(d, { addSuffix: true, locale: ru });
}

function formattedDate(Component:React.ComponentType<TDate>, prettier:Function) {
  const displayName = Component.displayName || Component.name || "Component";
  const c = (props:{date: string}) => {
    return <Component date={prettier(props.date)} />;
  }
  c.displayName = `formattedDate(${displayName}Pretty)`;

  return c;
}

const DateTimePretty = formattedDate(DateTime, prettier);

export default DateTimePretty;