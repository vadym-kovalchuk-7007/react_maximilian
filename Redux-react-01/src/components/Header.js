import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const onLogoutHandler = () => { dispatch(authActions.logout()); console.log('logout'); }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      }
      {!isAuth && <nav>
        <ul>
          <li>
            <button onClick={() => dispatch(authActions.login())}>login</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
