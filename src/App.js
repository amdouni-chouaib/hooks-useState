import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const dec = () => {
    if (counter > 0) {
      setCounter((prevcounter) => prevcounter - 1);
    }
  };
  const inc = () => {
    setCounter((prevcounter) => prevcounter + 1);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "9%" }}>
      <Button variant="outline-primary" onClick={dec}>
        -
      </Button>
      <h1>{counter}</h1>
      <Button variant="outline-primary" onClick={inc}>
        +
      </Button>
    </div>
  );
}

export default App;
