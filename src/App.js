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
  DeleteDialog,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  man1,
  man2,
  man3,
  man4,
  woman1,
  woman2,
  woman3,
  woman4,
  woman5,
  woman6,
  woman7,
} from "./Images/people";

const contacts = [
  { id: 0, isFavorite: true, name: "Addie Hernandez ", img: woman1 },
  { id: 1, isFavorite: true, name: "Oscar Arnold", img: man1 },
  { id: 2, isFavorite: false, name: "Isaiah McGuire", img: man2 },
  { id: 3, isFavorite: true, name: "Ann Schneider", img: woman2 },
  { id: 4, isFavorite: true, name: "Agnes Terru", img: woman3 },
  { id: 5, isFavorite: false, name: "Rose Bush", img: woman4 },
  { id: 6, isFavorite: false, name: "Duane Reese", img: man3 },
  { id: 7, isFavorite: true, name: "Mae Chandler", img: woman5 },
  { id: 8, isFavorite: false, name: "Evelyn Weaver", img: woman6 },
  { id: 9, isFavorite: true, name: "Catherine Moore", img: woman7 },
  { id: 10, isFavorite: false, name: "Sam Manning", img: man4 },
];

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const App = () => {
  if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

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
          <Route path="/contact-edit">
            <EditContact />
          </Route>
          <Route path="/contact-delete">
            <DeleteDialog />
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
