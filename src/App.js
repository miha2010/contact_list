import React from "react";
import styles from "./App.module.css";
import {
  Header,
  Navbar,
  SearchBar,
  AllContacts,
  Favorites,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Navbar />
        <SearchBar />
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <AllContacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
