import { TCard } from "../Types";

export default function Card({card, deleteItem}:{
  card: TCard,
  deleteItem: Function
}) {
  let deleteItemHandler = () => {
    deleteItem(card.id);
  }

  return (
    <div className="card-list__item">
      <div className="card-list__container">
        <div className="card-list__text">{card.content}</div>
        <button className="card-list__close" onClick={deleteItemHandler}>x</button>
      </div>
    </div>
  )
}