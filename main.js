import { createElement } from "react";
import { createRoot } from "react-dom/client";
import DodoFinal from "./dodo-launch.js";

const root = createRoot(document.getElementById("root"));
root.render(createElement(DodoFinal));
