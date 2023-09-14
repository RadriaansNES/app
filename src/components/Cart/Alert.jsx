import React, { useState, useEffect } from 'react';

function Alert({ message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose(); 
    }, 1500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className={`alert ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
}

export default Alert;