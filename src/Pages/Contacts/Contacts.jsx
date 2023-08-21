import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLazyFetchContactsQuery } from 'redux/auth/api';
import { selectFilter } from 'redux/contacts/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import {
  Container,
  Message,
  Title1,
  Title2,
  Wrapper,
} from '../Contacts/Contacts.styled';

const Contacts = () => {
  const [fetchContacts, { data: contacts, isFetching, error }] = useLazyFetchContactsQuery();

  const filter = useSelector(selectFilter);

  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts])
  

  return (
    <Container>
      <Wrapper>
        <Title1>New Contact</Title1>
        <ContactForm contacts={contacts ?? []} />
      </Wrapper>
      <Wrapper>
        <Title2>Contacts</Title2>
        {isFetching && <Loader />}
        {error && <p>{'error'}</p>}
        {contacts?.length > 0 ? (
          <>
            <Filter />
            {visibleContacts?.length > 0 ? (
              <ContactList contacts={visibleContacts} />
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
