import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteNumber = phoneId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== phoneId),
    }));
  };

  addcontact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.filter(contact => contact.name === name)
      ? alert(`${newContact.name} is already in your contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  onFilterChange = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <FormContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addcontact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onFilterChange} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteNumber} />
      </FormContainer>
    );
  }
}
