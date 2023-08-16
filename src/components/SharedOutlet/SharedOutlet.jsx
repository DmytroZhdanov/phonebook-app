import Loader from 'components/Loader/Loader';
import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './SharedOutlet.styled';
import { Burger } from 'components/Burger/Burger';
import { Logo } from 'components/Logo/Logo';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const SharedOutlet = () => {
  const [showMenu, setShowMenu] = useState(false)
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = window.screen.width < 768;

  return (
    <>
      <Header>
        <Logo isMobile={isMobile} />
        {isLoggedIn && !isMobile && <NavLink to="/contacts">Contacts</NavLink>}
        <HeaderContent isLoggedIn={isLoggedIn} isMobile={isMobile} />
        {isMobile && <Burger setShowMenu={setShowMenu} />}
        {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
