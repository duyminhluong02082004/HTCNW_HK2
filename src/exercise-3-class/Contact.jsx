import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="card h-100 d-flex flex-column shadow-sm">
      <div className="card-body flex-grow-1">
        <h5 className="card-title">{contact.name}</h5>
        <h6 className="card-subtitle text-muted">{contact.surname}</h6>
        <p className="card-text"><strong>Phone:</strong> {contact.phone}</p>
        <p className="card-text"><strong>Address:</strong> {contact.address}</p>
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
