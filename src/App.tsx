import React from "react";
import styles from "./App.module.css";
import { useModal } from "./components/Modal";

function App() {
  const { Modal, hide, toggle, isVisible } = useModal();

  return (
    <div className={styles.container}>
      <h1>Modal Window (Hook) Example</h1>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Modal</button>
      <Modal>
        <h1>Modal Window</h1>
        <p>Contents of the Modal Window can be found here!</p>
        <button onClick={hide}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
