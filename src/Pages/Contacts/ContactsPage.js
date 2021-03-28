import React from 'react';
import Container from '../../Components/Container/Container';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import Contacts from '../../Components/Contacts/Contacts';
import style from './Contacts.module.css';

const ContactsPage = () => {
  return (
    <Container>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts:</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default ContactsPage;
