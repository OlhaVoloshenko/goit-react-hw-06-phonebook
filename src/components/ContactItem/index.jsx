import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../Rdx/contactCreateSlice';
import {
  ListItem,
  NumByOrder,
  TelNum,
  DelBtn,
} from '../ContactList/ContactList.styled';

export function ContactItem({ contact, item }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <NumByOrder>{item + 1}</NumByOrder>
      {contact.name}: <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  item: PropTypes.number,
};
