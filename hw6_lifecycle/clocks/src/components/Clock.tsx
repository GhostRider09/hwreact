import {useEffect, useState} from 'react'
import { TClock } from '../Types';

export default function Clock({clockData, removeClockById}:{
  clockData: TClock, 
  removeClockById: Function
}) {
  const [time, changeTime] = useState(new Date());

  let printTime = (diff: string) => {
    if ( time ) {
      let zeroTime = new Date(time.setHours(time.getHours() + (time.getTimezoneOffset()/60)));
      let timeOffset = parseFloat(diff);
      if ( isNaN( timeOffset ) ) {
        timeOffset = 0;
      }

      let date = new Date((new Date()).setHours(zeroTime.getHours() + timeOffset));

      let dayLabel = "";
      if (date.getDate() < time.getDate()) {
        dayLabel = '(-1 day)'
      }
      if (date.getDate() > time.getDate()) {
        dayLabel = '(+1 day)'
      }

      return `${date.toLocaleTimeString()} ${dayLabel}`;
    }

    return "...";
  };

  let removeClock = () => {
    removeClockById(clockData.id);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      changeTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [time]);

  return (
    <div className="clock" data-id={clockData.id}>
      <div className='clock__title'>{clockData.title}</div>
      <div className='clock__time'>{printTime(clockData.diff)}</div>
      <button className="clock__remove" onClick={removeClock}>x</button>
    </div>
  )
}