import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { InputForm } from 'components/InputForm';
import { Filter } from 'components/Filter/';
import { ContactList } from 'components/ContactList';
import { PhonebookBox } from 'components/Phonebook/Phonebook.styled';
import { InputFormBox } from 'components/InputForm/InputForm.styled';
import { ContactListBox } from 'components/ContactList/ContactList.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandle = data => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts');

    data.id = nanoid();
    setContacts(contacts => [data, ...contacts]);
  };
  const filterChange = evt => {
    evt.preventDefault();
    setFilter(evt.currentTarget.value);
  };
  const onDelete = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1>Phonebook</h1>
        <InputForm submitHandle={submitHandle} />
      </InputFormBox>
      <ContactListBox>
        <h2>Contact List</h2>
        <Filter filter={filter} filterChange={filterChange} />
        {contacts.length ? (
          <ContactList contacts={filteredContacts} onDelete={onDelete} />
        ) : (
          <p>No any contacts</p>
        )}
      </ContactListBox>
    </PhonebookBox>
  );
}
