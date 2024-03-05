import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/phonebook/filtersSlice';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { StyledWrapper } from './App.styled';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../redux/articles/operations';
import { selectFilter } from '../redux/phonebook/filtersSlice';
import { selectContacts } from '../redux/phonebook/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContactThunk(newContact));
  };
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleDeleteUser = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <StyledWrapper>
      <h1>Phone Book</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onClickDelete={handleDeleteUser}
      />
    </StyledWrapper>
  );
};
