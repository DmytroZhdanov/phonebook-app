import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Text, Title } from './Welcome.styled';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Title>Welcome to your Phonebook Web App!</Title>
      {isLoggedIn ? (
        <Text>
          Click {<NavLink to="/contacts">here</NavLink>} to view your contacts
        </Text>
      ) : (
        <Text>
          {<NavLink to="/register">Sign up</NavLink>} or{' '}
          {<NavLink to="/login">Log in</NavLink>} to get started
        </Text>
      )}
    </>
  );
};

export default Welcome;
