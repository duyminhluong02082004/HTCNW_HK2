import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div className="container">
      {/* Thêm `row-cols-auto` để tránh card bị kéo giãn */}
      <div className="row row-cols-auto g-3 justify-content-center">
        {contacts.map((contact) => (
          <div key={contact.id} className="d-flex">
            <Contact contact={contact} deleteContact={deleteContact} />
          </div>
        ))}
      </div>

      {/* Nút Delete All */}
      {contacts.length > 0 && (
        <div className="text-end mt-3">
          <button className="btn btn-danger btn-lg" onClick={deleteAllContacts}>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
