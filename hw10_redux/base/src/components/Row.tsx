import { TItem } from "../Types"

export const Row = ({data, editItem, removeItem}:{
  data: TItem,
  editItem?: Function,
  removeItem?: Function,
}) => {
  const editHandler = () => {
    if ( editItem ) {
      editItem(data.id);
    }
  }

  const removeHandler = () => {
    if ( removeItem ) {
      removeItem(data.id);
    }
  }


  return (
    <li>
      <div className="row">
        <div className="row__title">{data.title}</div>
        <div className="row__price">{data.price}</div>
        <button onClick={editHandler}>edit</button>
        <button onClick={removeHandler}>remove</button>
      </div>
    </li>
  )
}