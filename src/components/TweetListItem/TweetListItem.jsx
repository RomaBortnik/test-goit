import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactListItem = ({ name, tweets, avatar }) => {
  return (
    <>
      <div>
        <div>name: {name}</div>
        <div>tweets: {tweets}</div>
        <img src={avatar} alt="" />
        <div>avatar: {avatar}</div>
      </div>
      {/* <Contact>
        {name}: {name}
        <ContactBtn
          onClick={() => {
            toast.success(`${name} removed from the contact list.`);
            dispatch(deleteContact(id));
          }}
          type="button"
        >
          Delete
        </ContactBtn>
      </Contact> */}
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ContactListItem;
