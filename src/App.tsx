import type { Component } from "solid-js";

import styles from "./App.module.css";
import { getAllBusiness, postBusiness } from "./services/business";
import { signIn } from "./services/auth";

const App: Component = () => {
  async function getProjs() {
    await getAllBusiness();
  }
  async function testLogin() {
    await signIn("new", "password");
  }
  async function testPost() {
    await postBusiness("new", ["cats"], ["links"], ["ImageLinks"]);
  }
  return (
    <div class={styles.App}>
      <button onclick={getProjs}>Get</button>
      <button onclick={testLogin}>Signin</button>
      <button onclick={testPost}>TestPost</button>
    </div>
  );
};

export default App;
