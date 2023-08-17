import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Greeting,
  List,
  LogOutLink,
  LogOutSvg,
} from './HeaderContent.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
            <>
              <LogOutLink to="/" onClick={handleLogOut}>
                Log Out
              </LogOutLink>
              <LogOutSvg size="24" />
            </>
          )}
        </>
      ) : (
        <>
          {!isMobile && (
            <List>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </List>
          )}
        </>
      )}
    </Container>
  );
};

HeaderContent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
