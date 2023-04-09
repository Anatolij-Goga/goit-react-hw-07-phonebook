import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import {
  ContactItem,
  ContactInfo,
  ContactButton,
} from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const [contactId, setContactId] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setContactId(contact.id);

    if (!error) {
      toast.success(`Contact ${contact.name} successfully deleted!`);
    }
  };

  return (
    <ContactItem>
      <ContactInfo>
        {contact.name} - {contact.phone}
      </ContactInfo>
      {isLoading && contactId === contact.id ? (
        <PuffLoader size={40} color="#ef4765" loading speedMultiplier={2} />
      ) : (
        <ContactButton
          type="button"
          onClick={handleDelete}
          disabled={isLoading}
        >
          Delete
        </ContactButton>
      )}
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactListItem;
