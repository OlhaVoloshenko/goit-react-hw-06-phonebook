import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';

export function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.map((contact, item) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
