import React, { useMemo } from 'react';
import { StyledButtonList, StyledLi } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from '../redux/phonebook/contactsSlice';
import { selectFilter } from '../redux/phonebook/filtersSlice';
import { Notification } from './Notific';
import { deleteContactThunk } from '../redux/articles/operations';
import { Loader } from './Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [contacts, filter]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <StyledLi key={contact.id}>
              {contact.name} - {contact.number}
              <StyledButtonList
                onClick={() => dispatch(deleteContactThunk(contact.id))}
              >
                Delete
              </StyledButtonList>
            </StyledLi>
          ))}
        </ul>
      )}
    </>
  );
};
