import React from 'react';
import MenuNavbar from './Navbar';
import Alert from '../Cart/Alert';

function Layout({ children, alertMessage, setAlertMessage }) {
  return (
    <div>
      <MenuNavbar />
      <main>
        {alertMessage && (
          <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
        )}
        {children}
      </main>
      <div className='footer'>
        <p>
          1955 Lasalle Blvd. - <a href='tel:7055666969'><strong>705-566-6969</strong></a>
        </p>
        <p>
          1769 Regent St. S. - <a href='tel:7055222828'><strong>705-522-2828</strong></a>
        </p>
        <p>
          3020 HWY. 69 N. - <a href='tel:7055885858'><strong>705-588-5858</strong></a>
        </p>
      </div>
    </div>
  );
}

export default Layout;