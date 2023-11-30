import {TListItemProps} from '../Types.ts'
import IconButton from './IconButton'

export default function ListItem({item, onChangeList}: TListItemProps) {
  const {id, date, distance} = item;

  let handlerRemoveRow = () => {
    onChangeList(prev => {
        return prev.filter(el => el.id !== id);
    });
  }

  return (
    <tr>
      <td>{date}</td>
      <td className='__centered'>{distance}</td>
      <td className='item-list__col-action __centered'>
        {/* <IconButton icon="edit" onClick={handlerEditRow} /> */}
        <IconButton icon="remove" onClick={handlerRemoveRow} />
      </td>
    </tr>
  )
}