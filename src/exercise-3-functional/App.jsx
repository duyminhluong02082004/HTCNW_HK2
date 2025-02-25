import React, { useState } from "react";
import ContactList from "./ContactList";
import contactsData from "./data";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);

  // Xóa 1 contact
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Xóa tất cả
  const deleteAllContacts = () => {
    setContacts([]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Contact List</h2>
      <ContactList contacts={contacts} deleteContact={deleteContact} deleteAllContacts={deleteAllContacts} />
    </div>
  );
};

export default App;
