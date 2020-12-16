import React, { Component } from 'react';
import ContactEditor from '../components/ContactsEditor/ContactEditor';
import ContactList from '../components/ContactList/ContactList';
import Filter from "./Filter";

class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedContact = localStorage.getItem('contacts')
    
    if(persistedContact) {
      this.setState({
        contacts: JSON.parse(persistedContact)
      })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = objectContact => {
    this.state.contacts.find(contact => contact.name === objectContact.name)
      ? alert(`${objectContact.name} is already in contacts.`)
      : this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            objectContact],
        } 
      })  
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  };

  changeFilter = filter => {
    this.setState({ filter});
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
      );
  };
 
  render () {
    const {contacts, filter} = this.state;
    const filterContact = this.getFilterContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactEditor onAddContact={this.addContact}/>
       
        {contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter 
            value={filter} 
            onChangeFilter={this.changeFilter}/>
            <ContactList 
            contacts={filterContact} 
            onRemoveContact={this.removeContact}/>
          </div> 
        )}
      </div>
    )
  };
};

export default App;
