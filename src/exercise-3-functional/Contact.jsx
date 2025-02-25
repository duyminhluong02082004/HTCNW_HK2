import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
      <button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
