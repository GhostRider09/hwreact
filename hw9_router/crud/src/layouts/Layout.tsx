import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export function Layout() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}