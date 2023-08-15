import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { Container, Header } from './SharedOutlet.styled';

export const SharedOutlet = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
  }

    return (
      <>
        <Header>
          <NavLink to="/">Phonebook</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          <Container>
            {isLoggedIn ? (
              <>
                <p>Welcome, {user.name}!</p>
                <NavLink to="/" onClick={handleLogOut}>
                  Log Out
                </NavLink>
              </>
            ) : (
              <ul>
                <li>
                  <NavLink to="/register">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Log In</NavLink>
                </li>
              </ul>
            )}
          </Container>
        </Header>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
  };