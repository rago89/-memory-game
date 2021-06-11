import { numberCell } from "../data.js";

const handlerSelectedKey = (event) => {
  const { target } = event;
  const { tagName } = target;
  if (tagName === "TD") {
    target.classList.remove("hidden");
    target.classList.add("visible");
    numberCell.push(target);
  }
};

export { handlerSelectedKey };
