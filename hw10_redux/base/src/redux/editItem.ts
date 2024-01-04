import { TItem } from "../Types";
import { EDIT_LIST_ROW } from "./actions"

const editItem = (item:Omit<TItem, 'id'>) => {
  return {
    type: EDIT_LIST_ROW,
    payload: item,
  }
}

export default editItem;