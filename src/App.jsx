import React, { useState } from "react";
import { INITIAL_CONTACTS } from "./exercise-2-functional/data";
import ContactList from "./exercise-2-functional/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  return (
    <div style={styles.app}>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

// CSS đơn giản
const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  }
};

export default App;
