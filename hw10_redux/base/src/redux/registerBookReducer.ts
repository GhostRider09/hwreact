import { IStoreState, TItem, TReducerAction, TSwitchEditModePayload } from "../Types";
import { v4 as uuid } from 'uuid';
import { 
  SET_INPUT_VALUE, 
  APPEND_LIST_ROW,
  EDIT_LIST_ROW,
  REMOVE_LIST_ROW,
  SET_FILTER_VALUE,
  CLEAR_INPUT_FORM,
  SWITCH_EDIT_MODE
} from "./actions";

const initialState:IStoreState = {
  // value: 0,
  inputPrice: "",
  inputTitle: "",
  editMode: false,
  editId: "",
  filterValue: "",
  list: []
};

const numberReducer = (state = initialState, action: TReducerAction) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAR_INPUT_FORM:
      state.inputPrice = "";
      state.inputTitle = "";
      
      return {
        ...state
      }
    case SWITCH_EDIT_MODE:
      const switchState: TSwitchEditModePayload = action.payload;

      let isChanged = false;
      if ( switchState.switchOn && switchState.id ) {
        let editItem = state.list.filter(item => item.id === switchState.id);
        if ( editItem.length ) {
          state.inputPrice = editItem[0].price.toString();
          state.inputTitle = editItem[0].title;
          state.editMode = true;
          state.editId = editItem[0].id;
          isChanged = true;
        }
      } else {
        state.inputPrice = "";
        state.inputTitle = "";
        state.editMode = false;
        state.editId = "";
        isChanged = true;
      }
      
      return (isChanged ? { ...state } : state );
    case APPEND_LIST_ROW:
      let item: TItem = action.payload;
      item.id = uuid();
      state.list.push( item );

      return {
        ...state
      };
    case REMOVE_LIST_ROW:
      const id = action.payload;
      state.list = state.list.filter(item => item.id !== id);

      return { ...state };
    case EDIT_LIST_ROW:
      if ( state.editId.length ) {
        let updateItem: TItem = action.payload;

        state.list = state.list.map(row => {
          if ( row.id === state.editId ) {
            updateItem.id = state.editId
            return updateItem;
          }

          return row;
        });

        return {
          ...state
        };
      }

      return state;
    case SET_FILTER_VALUE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export default numberReducer;