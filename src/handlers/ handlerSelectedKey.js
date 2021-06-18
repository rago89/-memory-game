import { numberCell } from "../data.js";

export const handlerSelectedKey = (event) => {
  // break selection if sietTimeOut function is running
  if (numberCell.length === 2) {
    return;
  }
  const { target } = event;
  const { tagName } = target;
  if (tagName !== "TD") {
    return;
  } else {
    target.classList.remove("hidden");
    target.classList.add("visible");
    numberCell.push(target);
  }
};
