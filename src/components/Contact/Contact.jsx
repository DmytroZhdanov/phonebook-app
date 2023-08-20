import PropTypes from 'prop-types';
import { ContactItem, DeleteButton, Text } from './Contact.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDeleteContactMutation } from 'redux/auth/api';

export const Contact = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    deleteContact(id);
  };

  return (
    <ContactItem>
      <Text>
        {name}: {number}
      </Text>
      <DeleteButton type="button" onClick={handleDelete}>
        <RiDeleteBin6Line size="20" color="#C8C8C8" />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
