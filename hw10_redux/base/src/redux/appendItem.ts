import { TItem } from "../Types";
import { APPEND_LIST_ROW } from "./actions"

const appendItem = (item:Omit<TItem, 'id'>) => {
  return {
    type: APPEND_LIST_ROW,
    payload: item,
  }
}

export default appendItem;