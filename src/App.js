import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header, Navbar, SearchBar, AllContacts, AddNew, EditContact, ContactDetail } from './components';
import styles from './App.module.css';
import mockContacts from './mockContacts';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));

  if (!localStorage.getItem('contacts')) {
    localStorage.setItem('contacts', JSON.stringify(mockContacts));
  }

  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path="/add-new">
            <AddNew setContacts={setContacts} contacts={contacts} />
          </Route>
          <Route path="/contact-details/:id">
            <ContactDetail setContacts={setContacts} contacts={contacts} />
          </Route>
          <Route path="/contact-edit/:id">
            <EditContact setContacts={setContacts} contacts={contacts} />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path={['/home', '/favorites']}>
            <Navbar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} contacts={contacts} setContacts={setContacts} />
            <AllContacts searchTerm={searchTerm} setContacts={setContacts} contacts={contacts} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
