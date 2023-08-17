import { LogoContainer, LogoText } from './Logo.styled';
import { RiContactsBookFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

export const Logo = ({ isMobile, isCurrent }) => {
  return (
    <LogoContainer to="/">
      <RiContactsBookFill size="32" />
      {!isMobile && <LogoText current={isCurrent.toString()}>Phonebook</LogoText>}
    </LogoContainer>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};
