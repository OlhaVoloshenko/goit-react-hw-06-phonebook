import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/contactCreateSlice';

export const Filter = () => {
  const contacts = useSelector(store => store.contacts.items);
  const contactFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = contactFilter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filteredContacts}
        onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};
