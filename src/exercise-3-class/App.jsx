import React, { Component } from "react";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo Bootstrap được import

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Chidi", surname: "Anagonye", phone: "555-366-8987", address: "St. John's University, Sydney, Australia" },
      { id: 2, name: "Eleanor", surname: "Shellstrop", phone: "555-483-1457", address: "335 Avalon St, Apt 2C, Phoenix, Arizona" },
      { id: 3, name: "Tahani", surname: "Al-Jamil", phone: "555-276-7991", address: "1 Lancaster Terrace, London, England" },
      { id: 4, name: "Jason", surname: "Mendoza", phone: "555-113-8388", address: "779 William St, Miami, Florida" },
    ],
  };

  // Xóa một contact theo id
  deleteContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id) });
  };

  // Xóa tất cả contacts
  deleteAllContacts = () => {
    this.setState({ contacts: [] });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact List</h2>
        <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} deleteAllContacts={this.deleteAllContacts} />
      </div>
    );
  }
}

export default App;
