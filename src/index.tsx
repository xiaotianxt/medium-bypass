import { render } from "react-dom";
import BypassButton from "./BypassButton";

import "./index.scss";

const App = () => {
  return <BypassButton />;
};

const element = document.createElement("div");
element.id = "medium-bypass-tool";
document.body.appendChild(element);

render(<App />, element);
