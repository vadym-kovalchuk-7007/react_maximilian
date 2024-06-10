import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const hasActiveClass = (isActive) => isActive ? classes.active : undefined

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => hasActiveClass(isActive)} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="events" className={({ isActive }) => hasActiveClass(isActive)}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
