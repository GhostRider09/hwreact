import {useState} from 'react'
import {TListItem} from '../Types'

export default function StepsForm({onChangeList}: { 
  onChangeList: React.Dispatch<React.SetStateAction<TListItem[]>> 
}) {
  const [form, setForm] = useState({  
    inputDate: "",
    inputDistance: ""
  });

  let handlerAddItem = () => {
    if ( !parseFloat(form.inputDistance) ) {
      return false;
    }

    let newId = new Date(form.inputDate);
    if ( !newId.getTime() ) {
      alert("Invalid date!");
      return false;
    }
    
    newId.setHours(0);
    newId.setMinutes(0);
    newId.setSeconds(0);

    let item = {
      id: newId.getTime(),
      date: form.inputDate,
      distance: parseFloat(form.inputDistance) || 0.0,
    };

    onChangeList(prev => {      
      let [issetItem] = prev.filter(el => el.id === item.id);

      if ( issetItem ) {
        return prev.map(el => { 
          if ( el.id === item.id ) {
            el.distance = (Math.round((el.distance + item.distance)*100)/100);
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