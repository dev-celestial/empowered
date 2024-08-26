@ -0,0 +1,18 @@
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <p style={{ color: '#6c757d', fontSize: '14px', margin: '0' }}>
          <strong>About Us:</strong> We are dedicated to providing top-notch educational resources and tools to empower learners across the globe. Our mission is to make learning accessible, engaging, and effective for everyone. Join us on this journey of knowledge and growth!
        </p>
        <p style={{ color: '#6c757d', fontSize: '12px', margin: '10px 0' }}>
          © 2024 Digital Dwapar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;