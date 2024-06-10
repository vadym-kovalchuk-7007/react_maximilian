import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

const hasActiveClass = (isActive) => isActive ? classes.active : undefined

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={(isActive) => hasActiveClass(isActive)} end>All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={(isActive) => hasActiveClass(isActive)}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
