import { Button, Form, Input, Label } from 'components/Form.styled';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/auth/api';
import PropTypes from 'prop-types';

export const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newContact = { name, number };
    const matchedContact = contacts?.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (matchedContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    addContact(newContact);
    reset();
  };

  const handleBlur = e => {
    e.currentTarget.parentElement.setAttribute(
      'data-filled',
      `${e.currentTarget.value === '' ? 'false' : 'true'}`
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="input-name">
        Name
        <Input
          type="text"
          name="name"
          id="input-name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
        />
      </Label>
      <Label htmlFor="input-number">
        Phone number
        <Input
          type="tel"
          name="number"
          id="input-number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={number}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
