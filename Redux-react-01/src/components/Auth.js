import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch()
  const onLogHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('password'));
    dispatch(authActions.login());

  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLogHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
