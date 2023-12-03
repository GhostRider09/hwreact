export default function SearchForm() {
  return (
    <form action="#">
      <div className="search__container">
        <input type="text" className="search__input" />
        <button className="search__button">Найти</button>
      </div>
      <div className="search__hint">Найдется все. Например, <span>фаза луны сегодня</span></div>
    </form>
  )
}