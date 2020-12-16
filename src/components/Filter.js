import React from 'react';
import './ContactsEditor/ContactEditor.css';

export default function Filter({ value, onChangeFilter}) {
  return (
    <div className="ContactEditor">
      <p>Find contact by name</p>
      <input 
      type="text" 
      className="ContactEditor-input" 
      value={value} 
      onChange={e => onChangeFilter(e.target.value)} 
      />
    </div>
  );
}