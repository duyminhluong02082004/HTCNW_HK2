import React from "react";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh Sách Liên Hệ</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {contacts.map((contact, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text"><strong>Phone:</strong> {contact.phone}</p>
                <p className="card-text"><strong>Address:</strong> {contact.address}</p>
                <button className="btn btn-danger w-100" onClick={() => deleteContact(index)}>
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {contacts.length > 0 && (
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-danger" onClick={deleteAllContacts}>
            Xóa Tất Cả
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
