import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Button } from './Eye.styled';
import PropTypes from 'prop-types';

export const Eye = ({ show, setShowPassword }) => {
  const handleClick = () => {
    setShowPassword(!show);
  };

  return (
    <Button type="button" onClick={handleClick}>
      {show ? <BsEye size="20" /> : <BsEyeSlash size="20" />}
    </Button>
  );
};

Eye.propTypes = {
  show: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};