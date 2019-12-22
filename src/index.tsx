import * as React from "react";
import { render } from "react-dom";
import { Example } from "./example";

import "./styles.css";

const App = () => (
  <div className="App">
    <Example />
  </div>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
