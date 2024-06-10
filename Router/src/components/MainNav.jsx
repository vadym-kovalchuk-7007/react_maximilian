import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

const hasActiveClass = (isActive) => (isActive ? classes.active : undefined);
export function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => hasActiveClass(isActive)}
              end // fix for /home path
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => hasActiveClass(isActive)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
