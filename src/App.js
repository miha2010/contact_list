import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header, Navbar, SearchBar, AllContacts, AddNew, EditContact, ContactDetail } from './components';
import styles from './App.module.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path="/add-new">
            <EditContact />
          </Route>
          <Route path="/contact-details/:id">
            <ContactDetail />
          </Route>
          <Route path="/contact-edit/:id">
            <EditContact />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path={['/home', '/favorites']}>
            <Navbar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <AllContacts searchTerm={searchTerm} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
