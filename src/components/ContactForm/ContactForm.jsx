import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  StyledContactForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const nameToLowerCase = name.toLowerCase();
    const equalEl = contacts.find(
      contact => contact.name.toLowerCase() === nameToLowerCase
    );
    if (equalEl) {
      return toast.error(`${name} is already in contact list`);
    } else {
      dispatch(addContact({ name, number }));
      toast.success(`${name} successfully added to the contact list.`);
      resetForm();
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledContactForm>
          <ContactFormLabel htmlFor="name">
            Name
            <ContactFormInput
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactFormLabel>
          <ContactFormLabel htmlFor="number">
            Number
            <ContactFormInput
              type="tel"
              name="number"
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactFormLabel>
          <ContactFormBtn type="submit">Add contact</ContactFormBtn>
        </StyledContactForm>
      </Formik>
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

export default ContactForm;
