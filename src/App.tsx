import type { Component } from "solid-js";

import styles from "./App.module.css";
import { getAllBusiness, postBusiness } from "./services/business";
import { signIn, signUp } from "./services/auth";

const App: Component = () => {
  async function getProjs() {
    await getAllBusiness();
  }
  async function testLogin() {
    await signIn("AdminUser", "fgj*3v^n#O#$O542!Z78*Lr7vLc");
  }
  async function testPost() {
    await postBusiness("new", ["links"], ["ImageLinks"], "description");
  }
  async function createUser() {
    await signUp("AdminUser", "fgj*3v^n#O#$O542!Z78*Lr7vLc");
  }
  return (
    <div class={styles.App}>
      <button onclick={getProjs}>Get</button>
      <button onclick={testLogin}>Signin</button>
      <button onclick={testPost}>TestPost</button>
      <button onclick={createUser}>MakeAdmin</button>
    </div>
  );
};

export default App;
