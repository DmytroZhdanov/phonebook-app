import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactItem, DeleteButton } from './Contact.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={handleDelete}>
        <RiDeleteBin6Line />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
