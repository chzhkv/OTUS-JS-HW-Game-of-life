import { addForm } from "./addForm";

const rootEl = document.querySelector("#app");
if (!rootEl) {
  throw new Error("Not found root element");
}
addForm(rootEl);
