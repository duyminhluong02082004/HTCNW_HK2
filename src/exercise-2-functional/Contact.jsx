import React from "react";

const Contact = ({ contact }) => {
  return (
    <div style={styles.card}>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
    </div>
  );
};

// CSS đơn giản
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    width: "200px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
  }
};

export default Contact;
