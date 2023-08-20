import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  BackDrop,
  CloseButton,
  Container,
  Item,
  List,
} from './MobileMenu.styled';
import { GrClose } from 'react-icons/gr';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useLogoutMutation } from 'redux/auth/api';
import { initialState, setCredentials } from 'redux/auth/authSlice';

export const MobileMenu = ({ setShowMenu }) => {
  const dispatch = useDispatch();
  const mobMenuRoot = document.querySelector('#mob-menu-root');
  const [logout] = useLogoutMutation();
  const token = useSelector(selectToken);

  const handleClick = () => {
    setShowMenu(false);
  };

  const handleLogOut = () => {
    logout();
    dispatch(setCredentials(initialState));
    handleClick();
  };

  const handleBackdropClick = e => {
    e.currentTarget === e.target && setShowMenu(false);
  };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Container>
        <CloseButton type="button" onClick={handleClick}>
          <GrClose size="32" />
        </CloseButton>

        {token ? (
          <List>
            <Item>
              <NavLink to="/contacts" onClick={handleClick}>
                Contacts
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/" onClick={handleLogOut}>
                Log Out
              </NavLink>
              <RiLogoutBoxRLine size="24" />
            </Item>
          </List>
        ) : (
          <List>
            <Item>
              <NavLink to="/register" onClick={handleClick}>
                Sign Up
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/login" onClick={handleClick}>
                Log In
              </NavLink>
            </Item>
          </List>
        )}
      </Container>
    </BackDrop>,
    mobMenuRoot
  );
};

MobileMenu.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
};
