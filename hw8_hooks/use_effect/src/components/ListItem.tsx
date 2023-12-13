import { TUserListItem } from "../Types"

export default function ListItem({selected, userItem, onClick}: {
  userItem: TUserListItem
  onClick: React.MouseEventHandler
  selected?: boolean
}) {
  return (
    <li  
      className={selected ? "__selected" : ""}
      data-id={userItem.id} 
      onClick={onClick}>{userItem.name}</li>
  )
}