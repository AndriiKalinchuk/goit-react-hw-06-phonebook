import React from 'react';
import { Button, Item } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/contactsSlice';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <Item key={contact.id}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <Button onClick={dispatch(deleteContact(contact.id))}>Delete</Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
