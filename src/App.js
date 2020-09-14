import React from "react";
import styles from "./App.module.css";
import {
  Header,
  Navbar,
  SearchBar,
  AllContacts,
  Favorites,
  AddNew,
  EditContact,
  ContactDetail,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path="/add-new">
            <AddNew />
          </Route>
          <Route path="/contact-details">
            <ContactDetail />
          </Route>
          <Route path="/favorites">
            <Navbar />
            <SearchBar />
            <Favorites />
          </Route>
          <Route path="/">
            <Navbar />
            <SearchBar />
            <AllContacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
