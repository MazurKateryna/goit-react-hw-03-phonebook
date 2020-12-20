import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './ContactEditor.css'

export default class ContactEditor extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

 state = {
   name: '',
   number: '',
 };

 handleChangeName = e => {
   this.setState({
     name: e.target.value,
   });
 };

 handleChangeNumber = e => {
   this.setState({
     number: e.target.value,
   });
 };

 handleSubmit = e => {
   e.preventDefault();
   this.props.onAddContact({...this.state, id: uuidv4()});
   this.setState( { name: '', number: ''});
 };

 render(){
   const { name, number } = this.state;
   return (
    <form className="ContactEditor" onSubmit={this.handleSubmit}>
    <label className="ContactEditor-label">
      Name
      <input
        className="ContactEditor-input"
        type="text"
        value={name}
        onChange={this.handleChangeName}
      />
    </label>
    <label className="ContactEditor-label">
      Number
      <input
        className="ContactEditor-input"
        type="text"
        value={number}
        onChange={this.handleChangeNumber}
      />
    </label>

    <button type="submit" className="ContactEditor-button">
      Add contact
    </button>
  </form>
   )
 }
}