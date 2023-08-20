import Loader from 'components/Loader/Loader';
import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { ContactLink, Header } from './SharedOutlet.styled';
import { Burger } from 'components/Burger/Burger';
import { Logo } from 'components/Logo/Logo';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const SharedOutlet = () => {
  const [showMenu, setShowMenu] = useState(false);
  const token = useSelector(selectToken);
  const isMobile = window.screen.width < 768;
  const { pathname } = useLocation();

  return (
    <>
      <Header>
        <Logo isMobile={isMobile} isCurrent={pathname === '/'} />
        {token && !isMobile && (
          <ContactLink
            to="/contacts"
            current={(pathname === '/contacts').toString()}
          >
            Contacts
          </ContactLink>
        )}
        <HeaderContent isLoggedIn={token ? true : false} isMobile={isMobile} />
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
