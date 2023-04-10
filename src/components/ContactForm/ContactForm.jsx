import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  FormikContainer,
  FormContainer,
  FormLabel,
  InputName,
  InputNumber,
  FormButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  phone: '',
};

const ContactFormSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const existingContact = contacts.find(
      contact => contact.name === values.name
    );

    if (existingContact) {
      return toast.error(`This name is already in contacts!`);
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <FormikContainer
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <FormContainer autoComplete="off">
        <FormLabel>
          Name
          <InputName type="text" name="name" />
          <ErrorMessage name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <InputNumber type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormContainer>
    </FormikContainer>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
