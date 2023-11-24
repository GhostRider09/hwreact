const DaysRows = (props) => {
    let rowDays = props.daysRows;

    return (
        <tr>
            {rowDays.map(item => {
                console.log(item);
                let styleClass = "";
                if ( item.other === "Y" ) {
                    styleClass = "ui-datepicker-other-month";
                }
                if ( item.current === "Y" ) {
                    styleClass = "ui-datepicker-today";
                }

                return <td className={styleClass}>{item.day}</td>
            })}
        </tr>
    );
 }

export default DaysRows