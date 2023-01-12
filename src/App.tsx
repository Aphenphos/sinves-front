import type { Component } from "solid-js";

import styles from "./App.module.css";
import { getAllBusiness } from "./services/business";
import { signIn } from "./services/auth";

const App: Component = () => {
  async function getProjs() {
    await getAllBusiness();
  }
  async function testLogin() {
    await signIn("new", "password");
  }
  return (
    <div class={styles.App}>
      <button onclick={getProjs}>Get</button>
      <button onclick={testLogin}>Signin</button>
    </div>
  );
};

export default App;
