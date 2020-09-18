import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContactsStore } from './context/ContactsContext';

ReactDOM.render(
  <ContactsStore>
    <App />
  </ContactsStore>,
  document.getElementById('root'),
);
