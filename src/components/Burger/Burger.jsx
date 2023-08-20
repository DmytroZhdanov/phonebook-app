import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from './Burger.styled';
import PropTypes from 'prop-types';

export const Burger = ({ setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(true);
  };

  return (
    <Button type="button" onClick={handleClick}>
      <RxHamburgerMenu size="32" />
    </Button>
  );
};

Burger.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
};
