import {useState} from 'react'
import {TListItem} from '../Types'

export default function StepsForm({onChangeList}: { 
  onChangeList: React.Dispatch<React.SetStateAction<TListItem[]>> 
}) {
  const [form, setForm] = useState({  
    inputDate: "",
    inputDistance: ""
  });

  let stringToDate = (strDate: string): Date | null => {
    let matches = strDate.match(/^(\d{2}).(\d{2}).(\d{4})$/);
    
    if ( matches ) {
      let [_, d, m, Y] = matches;
      return new Date(`${Y}-${m}-${d}`);
    }

    return null;
  }

  let handlerAddItem = () => {
    if ( !parseFloat(form.inputDistance) ) {
      return false;
    }

    let newId = stringToDate(form.inputDate);
    if ( newId === null ) {
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
              type="tel" 
              id="date" 
              name="inputDate" 
              value={form.inputDate} 
              onChange={handleChangeInput} />
          </div>
          <div className="form__cols">
            <label className='form__label' htmlFor="distance">Пройдено, км</label>
            <input 
              className='form__input' 
              type="tel" 
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