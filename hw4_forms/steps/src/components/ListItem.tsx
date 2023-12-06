import {TListItemProps} from '../Types.ts'
import IconButton from './IconButton'

export default function ListItem({item, onSetUpdate, onChangeList}: TListItemProps) {
  const {id, date, distance} = item;

  let handlerRemoveRow = () => {
    onChangeList(prev => {
        return prev.filter(el => el.id !== id);
    });
  }

  let handlerEditRow = () => {
    if ( typeof onSetUpdate !== "undefined" ) {
      onSetUpdate(id);
    }
  }

  let getPrintableDate = (date: string): string => {
    let d = new Date(date);
    if ( !d.getTime() ) {
      return "-";
    }

    let day = d.getDate().toString();
    if ( d.getDate() < 10 ) {
      day = "0" + d.getDate().toString();
    }

    let month = (d.getMonth() + 1).toString();
    if ( (d.getMonth() + 1) < 10 ) {
      month = "0" + (d.getMonth() + 1).toString();
    }

    return `${day}.${month}.${d.getFullYear()}`;
  }

  return (
    <tr>
      <td>{getPrintableDate(date)}</td>
      <td className='__centered'>{distance}</td>
      <td className='item-list__col-action __centered'>
        <IconButton icon="edit" onClick={handlerEditRow} />
        <IconButton icon="remove" onClick={handlerRemoveRow} />
      </td>
    </tr>
  )
}