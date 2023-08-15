import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import {
  Container,
  Message,
  Title1,
  Title2,
  Wrapper,
} from '../Welcome/Welcome.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Wrapper>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {contacts.length > 0 ? (
          <>
            <Filter />
            {visibleContacts.length > 0 ? (
              <ContactList />
            ) : (
              <Message>
                Sorry, we didn't find any contacts matching your query
              </Message>
            )}
          </>
        ) : (
          <Message>You don't have any contacts</Message>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contacts;
