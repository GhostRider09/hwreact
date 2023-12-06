import {useState, useEffect} from 'react'
import {TListItem} from '../Types'

export default function StepsForm({updatingItem, onSetUpdate, onChangeList}: { 
  updatingItem: TListItem | null,
  onSetUpdate: React.Dispatch<React.SetStateAction<number>> 
  onChangeList: React.Dispatch<React.SetStateAction<TListItem[]>> 
}) {
  const [form, setForm] = useState({  
    inputDate: "",
    inputDistance: ""
  });

  useEffect(() => {
    if (updatingItem) {
      setForm({  
        inputDate: updatingItem.date,
        inputDistance: updatingItem.distance.toString()
      });
    }
  }, [updatingItem]);

  let generateId = (date:string): number | null => {
    let newId = new Date(date);
    if ( !newId.getTime() ) {
      return null;
    }

    newId.setHours(0);
    newId.setMinutes(0);
    newId.setSeconds(0);

    return newId.getTime();
  }

  let handlerAddItem = () => {
    if ( !parseFloat(form.inputDistance) ) {
      return false;
    }

    let newId = generateId(form.inputDate);
    if ( newId === null ) {
      alert("Invalid date!");
      return false;
    }

    let isUpdate = ( updatingItem !== null );

    let item = {
      id: ( updatingItem !== null ? updatingItem.id : newId ),
      date: form.inputDate,
      distance: parseFloat(form.inputDistance) || 0.0,
    };

    onChangeList(prev => {      
      let [issetItem] = prev.filter(el => el.id === item.id);

      if ( issetItem ) {
        return prev.map(el => { 
          if ( el.id === item.id ) {
            if ( isUpdate ) {
              el.distance = (Math.round((item.distance)*100)/100);
            } else {
              el.distance = (Math.round((el.distance + item.distance)*100)/100);
            }
          }
          
          return el;
        });
      }

      
      return [...prev, item];
    });

    setForm({  
      inputDate: "",
      inputDistance: ""
    });

    onSetUpdate(0);
  }

  let handleChangeInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  return (
    <div className="steps__form">
      <form>
        <div className="form__container">
          <div className="form__cols">
            <label className='form__label' htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
            <input 
              className='form__input' 
              type="date" 
              id="date" 
              name="inputDate" 
              value={form.inputDate} 
              onChange={handleChangeInput} />
          </div>
          <div className="form__cols">
            <label className='form__label' htmlFor="distance">Пройдено, км</label>
            <input 
              className='form__input' 
              type="number" 
              id="distance" 
              name="inputDistance" 
              value={form.inputDistance} 
              onChange={handleChangeInput} />
          </div>
          <div className="form__cols __button">
            <button 
              className='form__button' 
              type="button"
              onClick={handlerAddItem} >ОК</button>
          </div>
        </div>
      </form>
    </div>
  )
}