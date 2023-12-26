import {useState} from 'react'
import { IPost } from '../models';

export default function Form({post, addNoteHandler}:{
  post?: IPost | null,
  addNoteHandler: Function
}) {
  const [ formdata, changeFormdata ] = useState({inputText: post ? post.content : ""});

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
            <label htmlFor="text" className='form__label'>Post content</label>
            <textarea 
              name="inputText" 
              id="text" 
              onChange={onChange} 
              value={formdata.inputText}
              className='form__input'></textarea>
          </div>
          <button type='submit' className='btn form__button'>{post ? "Сохранить" : "Опубликовать"}</button>
        </div>
      </form>
    </div>
  )
}