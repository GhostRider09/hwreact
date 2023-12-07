import {useState} from 'react'
import { v1 as uuid } from 'uuid';
import {TClock} from '../Types'

export default function Form({onChangeList}: { 
  onChangeList: React.Dispatch<React.SetStateAction<TClock[]>> 
}) {
  const [form, setForm] = useState({  
    inputTitle: "",
    inputDiff: ""
  });

  let handlerAddItem = () => {
    if ( isNaN(parseFloat(form.inputDiff)) || !form.inputTitle.length ) {
      return false;
    }

    let diff = parseFloat(form.inputDiff);

    if ( diff < -12 || diff > 12 ) {
      alert("Число должно быть в диапазоне от -12 до +12!");
      return false;
    }

    let item = {
      id: uuid(),
      title: form.inputTitle,
      diff: form.inputDiff,
    };

    onChangeList(prev => {
      return [...prev, item];
    });

    setForm({  
      inputTitle: "",
      inputDiff: ""
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
            <label className='form__label' htmlFor="date">Title</label>
            <input 
              className='form__input' 
              type="text" 
              id="title" 
              name="inputTitle" 
              value={form.inputTitle} 
              onChange={handleChangeInput} />
          </div>
          <div className="form__cols">
            <label className='form__label' htmlFor="distance">Timezone as time (+1, -5)</label>
            <input 
              className='form__input' 
              type="number" 
              id="diff" 
              name="inputDiff" 
              value={form.inputDiff} 
              onChange={handleChangeInput} />
          </div>
          <div className="form__cols __button">
            <button 
              className='form__button' 
              type="button"
              onClick={handlerAddItem} >Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}