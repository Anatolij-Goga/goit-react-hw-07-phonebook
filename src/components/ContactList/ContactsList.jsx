import { useSelector } from 'react-redux';
import { selectContactByName, selectIsLoading } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import {
  ContactWrapper,
  ContactUl,
  ContactItem,
  EmptyContactText,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContactByName);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactWrapper>
      {contacts.length > 0 && (
        <>
          <ContactUl>
            {contacts.map(contact => (
              <ContactItem key={contact.id}>
                <ContactListItem contact={contact} />
              </ContactItem>
            ))}
          </ContactUl>
        </>
      )}

      {!isLoading && contacts.length === 0 && (
        <EmptyContactText>Contacts list is empty</EmptyContactText>
      )}
    </ContactWrapper>
  );
};

export default ContactsList;
