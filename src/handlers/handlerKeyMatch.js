import { numberCell } from "../data.js";
import { toggleItems } from "../procedures/toggleItems.js";
import { victoryMessage } from "../procedures/victory.js";

const cells = document.querySelectorAll("td");
const cellsArray = Array.from(cells);

export const handlerKeyMatch = () => {
  const firstKey = numberCell[0];
  const secondKey = numberCell[1];
  // console.dir(numberCell);
  // console.dir(cells);
  if (typeof firstKey === "undefined") return;
  if (numberCell.length === 1) return;
  // if the user select twice the same TD
  if (
    firstKey.offsetHeight === secondKey.offsetHeight &&
    firstKey.offsetLeft === secondKey.offsetLeft &&
    firstKey.offsetTop === secondKey.offsetTop &&
    firstKey.offsetWidth === secondKey.offsetWidth
  ) {
    toggleItems(numberCell);
    numberCell.splice(0);
    return;
  }
  // if key matches
  if (firstKey.innerHTML === secondKey.innerHTML) {
    firstKey.dataset.selected = "yes";
    secondKey.dataset.selected = "yes";
    numberCell.splice(0);
  } else {
    // the argument of the callback function is passed as a third argument in the setTimeOut function
    setTimeout(toggleItems, 500, numberCell);
  }
  // victory message
  const allSelected = cellsArray.every((element) => element.dataset.selected === "yes");
  if (allSelected) {
    victoryMessage();
  }
};
