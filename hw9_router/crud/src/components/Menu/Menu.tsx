import { NavLink } from "react-router-dom"

export function Menu() {
  const activeLink = ({ isActive }: {isActive:boolean}) => {
    return (isActive ? "menu__item menu__item-active" : "menu__item" ); 
  }

  return (
    <nav className="menu">
      <NavLink className={activeLink} to="/">Посты</NavLink>
      <NavLink className={activeLink} to="/posts/new">Создать пост</NavLink>
    </nav>
  )
}