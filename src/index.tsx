import BypassButton from "./BypassButton";

import "./index.scss";

const element = document.createElement("div");
element.id = "medium-bypass-tool";
document.body.appendChild(element);

element.appendChild(BypassButton());
