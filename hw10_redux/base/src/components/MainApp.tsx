import { useDispatch, useSelector } from "react-redux";
import { 
  CLEAR_INPUT_FORM,
  REMOVE_LIST_ROW,
  SET_FILTER_VALUE,
  SET_INPUT_VALUE,
  SWITCH_EDIT_MODE
 } from "../redux/actions";
import appendItem from "../redux/appendItem";
import { Row } from "./Row";
import { IReduxState, TItem } from "../Types";
import editItem from "../redux/editItem";

export const MainApp = () => {
  const dispatch = useDispatch();
  const { 
    list: issetItems, 
    inputTitle, 
    inputPrice, 
    editMode: isEdit, 
    editId,
    filterValue
  } = useSelector((state:IReduxState) => state.registerBook);

  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();

    if ( isEdit ) {
      dispatch(editItem({
        title: inputTitle,
        price: parseInt(inputPrice) || 0,
      }));

      dispatch({
        type: SWITCH_EDIT_MODE,
        payload: { switchOn: false },
      });
    } else {
      dispatch(appendItem({
        title: inputTitle,
        price: parseInt(inputPrice) || 0,
      }));

      dispatch({
        type: CLEAR_INPUT_FORM,
        payload: null,
      });
    }
  }

  const fieldChangeHandler = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = target;
    
    dispatch({
      type: SET_INPUT_VALUE,
      payload: {[name]: value},
    });
  }

  const filterListHandler = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = target;
    
    dispatch({
      type: SET_FILTER_VALUE,
      payload: {[name]: value},
    });
  }

  const editItemHandler = (id: string) => {
    dispatch({
      type: SWITCH_EDIT_MODE,
      payload: { switchOn: true, id: id },
    });
  }

  const removeItemHandler = (id: string) => {
    dispatch({
      type: REMOVE_LIST_ROW,
      payload: id,
    });

    if ( isEdit && id === editId ) {
      dispatch({
        type: SWITCH_EDIT_MODE,
        payload: { switchOn: false },
      });
    }
  }

  const cancelEditModeHandler = () => {
    dispatch({
      type: SWITCH_EDIT_MODE,
      payload: { switchOn: false },
    });
  }

  const renderItems = (items: TItem[]) => {
    let preparedList = items;

    if ( filterValue && filterValue.length ) {
      preparedList = items.filter(item => {
        if ( item.title.includes( filterValue ) ) {
          return item;
        }
      });
    }

    if ( preparedList.length ) {
      return preparedList.map((item:TItem) => <Row 
        data={item}
        editItem={editItemHandler}
        removeItem={removeItemHandler}
        key={item.id} />
      )
    }

    return <p>not found results</p>
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            required
            name="inputTitle"
            value={inputTitle}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          <input
            type="number"
            required
            name="inputPrice"
            value={inputPrice}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          <button>Save</button>
          {isEdit && <button type="button" onClick={cancelEditModeHandler}>Cancel</button>}
        </div>
      </form>
      {issetItems && issetItems.length > 0 && 
        <div className="filter">
            <label>Введите значение фильтра по названию: </label>
            <input
              type="text"
              required
              name="filterValue"
              value={filterValue}
              onChange={filterListHandler}
            />
        </div>
      }
      <ul className="rows">
        {issetItems && renderItems(issetItems)}
      </ul>
    </>
  )
}