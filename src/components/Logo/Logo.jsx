import { LogoContainer, LogoText } from "./Logo.styled";
import {RiContactsBookFill} from 'react-icons/ri'
import PropTypes from 'prop-types';

export const Logo = ({ isMobile }) => {
  return (
    <LogoContainer to="/">
      <RiContactsBookFill size="32" />
      {!isMobile && <LogoText>Phonebook</LogoText>}
    </LogoContainer>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool.isRequired
}