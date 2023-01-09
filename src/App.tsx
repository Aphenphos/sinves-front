import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { getAllBusiness } from "./services/business";

const App: Component = () => {
  async function getProjs() {
    await getAllBusiness();
  }
  return (
    <div class={styles.App}>
      <button onclick={getProjs}>Get</button>
    </div>
  );
};

export default App;
