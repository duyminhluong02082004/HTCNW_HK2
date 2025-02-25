import React from "react";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh Sách Liên Hệ</h2>

      <div className="row">
        {contacts.map((contact, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.phone}</p>
                <button className="btn btn-danger w-100" onClick={() => deleteContact(index)}>
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {contacts.length > 0 && (
        <button className="btn btn-danger mt-3 d-block ms-auto" onClick={deleteAllContacts}>
          Xóa Tất Cả
        </button>
      )}
    </div>
  );
};

export default ContactList;
