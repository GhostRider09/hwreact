import {format} from 'date-fns'
import ru from "date-fns/locale/ru";
import DaysRows from './DaysRows.jsx'

const Calendar = (props) => { 
  const selectedDate = props.date;

  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
  const getPrintableMonthName = (date, caseToShow = "I") => {
    if ( caseToShow === "R" ) {
      return capitalizeFirstLetter(format(date, 'MMMM', {locale: ru}));
    }

    return capitalizeFirstLetter(format(date, 'LLLL', {locale: ru}));
  }
  const getPrintableWeekDay = date => capitalizeFirstLetter(format(date, 'eeee', {locale: ru}));
  const daysInMonth = date => {
    let fd = new Date(date.getFullYear(), date.getMonth(), 1);
    let nd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    
    return Math.round((nd - fd) / 1000 / 3600 / 24);
  }

  const generateMonthDates = date => {  
    let currYear = date.getFullYear(), currMonth = date.getMonth(), currDay = date.getDate();

    let firstDayOfMonth = new Date(currYear, currMonth, 7).getDay(), 
        lastDateOfMonth =  new Date(currYear, currMonth+1, 0).getDate(),
        lastDayOfLastMonth = currMonth == 0 ? new Date(currYear-1, 11, 0).getDate() : new Date(currYear, currMonth, 0).getDate();

    let rows = []; 

    let i=1, rowId = 0;
    do {
      let dow = new Date(currYear, currMonth, i).getDay();
      // Начать новую строку в понедельник
      if ( dow == 1 ) {
        rows[rowId] = [];
      }
      // Если первый день недели не понедельник показать последние дни предыдущего месяца
      else if ( i == 1 ) {
        rows[rowId] = [];

        let k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(let j=0; j < firstDayOfMonth; j++) {
          rows[rowId].push({day: k, other: "Y", current: "N"});
          k++;
        }
      }

      // Записываем текущий день в цикл
      // let chk = new Date();
      // let chkY = chk.getFullYear();
      // let chkM = chk.getMonth();
      // let chkD = chk.getDate();
      // if (chkY == currYear && chkM == currMonth && i == chkD) {
      if ( i == currDay) {
        rows[rowId].push({day: i, other: "N", current: "Y"});
      } else {
        rows[rowId].push({day: i, other: "N", current: "N"});
      }
      
       // закрыть строку в воскресенье
      if ( dow == 0 ) {
        rowId++;
      }      
      // Если последний день месяца не воскресенье, показать первые дни следующего месяца
      else if ( i == lastDateOfMonth ) {
        let k=1;
        for(dow; dow < 7; dow++) {
          rows[rowId].push({day: k, other: "Y", current: "N"});
          k++;
        }
      }
      i++;
    } while (i <= lastDateOfMonth);

    return rows;
  }

  let daysRows = generateMonthDates(selectedDate);
  
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{getPrintableWeekDay(selectedDate)}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{selectedDate.getDate()}</div>
            <div className="ui-datepicker-material-month">{getPrintableMonthName(selectedDate, "R")}</div>
            <div className="ui-datepicker-material-year">{selectedDate.getFullYear()}</div>
          </div>
      </div>
      <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{getPrintableMonthName(selectedDate)}</span>&nbsp;<span className="ui-datepicker-year">{selectedDate.getFullYear()}</span>
          </div>
      </div>
      <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
          </colgroup>
          <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            {daysRows.map(row => <DaysRows daysRows={row}/>)}
          </tbody>
      </table>
    </div>
  );
}

export default Calendar