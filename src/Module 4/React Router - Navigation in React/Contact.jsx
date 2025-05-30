// File: Contact.jsx
// Description: Displays contact information for the React Router demo application.

import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <p>
        You can reach out to us via email at{' '}
        <a href="mailto:info@example.com">info@example.com</a>. We would love to hear
        your feedback or questions about this React Router demo.
      </p>
    </div>
  );
};

export default Contact;
