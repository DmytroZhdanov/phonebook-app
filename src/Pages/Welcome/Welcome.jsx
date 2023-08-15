import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <h1>Welcome to your Phonebook Web App!</h1>
      {isLoggedIn ? (
        <p>
          Click {<NavLink to="/contacts">here</NavLink>} to check your contacts
        </p>
      ) : (
        <p>
          {<NavLink to="/register">Sign up</NavLink>} or{' '}
          {<NavLink to="/login">Log in</NavLink>} to get started
        </p>
      )}
    </>
  );
};

export default Welcome;
