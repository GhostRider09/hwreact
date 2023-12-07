import {useState} from 'react'

export default function Form({addNoteHandler}:{addNoteHandler: Function}) {
  const [ formdata, changeFormdata ] = useState({inputText: ""});

  let onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    changeFormdata({inputText: e.target.value});
  }

  let onSubmit: React.FormEventHandler = (evt) => {
    evt.preventDefault();

    if ( !formdata.inputText || !formdata.inputText.length ) {
      alert('Текст не может быть пустым!');
      return false;
    }

    addNoteHandler({ content: formdata.inputText })
      .then(() => {
        changeFormdata({inputText: ""});
      })
      .catch(() => {
        alert('Ошибка выполнения запроса! Сервер недоступен!');
      });    
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form__container">
          <div className="form__field">
            <label htmlFor="text" className='form__label'>New Note</label>
            <textarea 
              name="inputText" 
              id="text" 
              onChange={onChange} 
              value={formdata.inputText}
              className='form__input'></textarea>
          </div>
          <button type='submit' className='form__button'>Отправить</button>
        </div>
      </form>
    </div>
  )
}