import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContainer, ContactsTitle, PhonebookTitle } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function notifiesAlert(numberContact, nameContact) {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  }

  function checkСontact(newNumber) {
    return contacts.some(contact => contact.phone === newNumber);
  }

  function onSubmit(name, phone) {
    if (checkСontact(phone)) {
      return notifiesAlert(phone, name);
    }

    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} added successfully`);
  }

  return (
    <AppContainer>
      <ToastContainer autoClose={2000} position="top-right" />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={onSubmit} />

      <ContactsTitle>Contacts</ContactsTitle>

      {isLoading && !error && <b>Request in progress...</b>}

      {error && <p>Something went wrong, please try again later</p>}
      <Filter />
      <ContactsList />
    </AppContainer>
  );
}
