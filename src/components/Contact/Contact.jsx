import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactItem, DeleteButton, Text } from './Contact.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Text>
        {name}: {number}
      </Text>
      <DeleteButton type="button" onClick={handleDelete}>
        <RiDeleteBin6Line size="20" color='#C8C8C8'/>
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
