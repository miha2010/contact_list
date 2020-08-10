import React from "react";
import styles from "./App.module.css";
import { Header, Navbar, SearchBar, AllContacts } from "./components";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <SearchBar />
      <AllContacts />
    </div>
  );
};

export default App;
