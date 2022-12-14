import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
