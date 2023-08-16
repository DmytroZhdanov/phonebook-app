import { useDispatch, useSelector } from 'react-redux';
import { Container, Greeting } from './HeaderContent.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

export const HeaderContent = ({ isLoggedIn, isMobile }) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Greeting>Welcome, {user.name}!</Greeting>
          {!isMobile && (
            <NavLink to="/" onClick={handleLogOut}>
              Log Out
            </NavLink>
          )}
        </>
      ) : (
        <>
          {!isMobile && (
            <ul>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </ul>
          )}
        </>
      )}
    </Container>
  );
};
