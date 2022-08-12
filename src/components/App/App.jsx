import { useSelector } from 'react-redux';
//import { nanoid } from 'nanoid';
import { InputForm } from 'InputForm';
import { Filter } from 'Filter';
import { ContactList } from 'ContactList';
import { PhonebookBox } from 'Phonebook/Phonebook.styled';
import { InputFormBox } from 'InputForm/InputForm.styled';
import { ContactListBox } from 'ContactList/ContactList.styled';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
  const contactsFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <InputForm />
      </InputFormBox>
      <ContactListBox>
        <Filter />
        <ContactList contacts={filteredContacts} /> :
      </ContactListBox>
    </PhonebookBox>
  );
}
