import { numberCell } from "../data.js";
import { toggleItems } from "../procedures/toggleItems.js";
import { victoryMessage } from "../procedures/victory.js";

const cells = document.querySelectorAll("td");
const cellsArray = Array.from(cells);

const handlerKeyMatch = () => {
  const firstKey = numberCell[0];
  const secondKey = numberCell[1];
  if (numberCell.length === 1) return;
  if (firstKey.innerHTML === secondKey.innerHTML) {
    firstKey.dataset.selected = "yes";
    secondKey.dataset.selected = "yes";
    numberCell.splice(0);
  } else {
    // the argument of the callback function is passed as a third argument in the setTimeOut function
    setTimeout(toggleItems, 500, numberCell);
  }
  const allSelected = cellsArray.every(
    (element) => element.dataset.selected === "yes"
  );
  if (allSelected) {
    victoryMessage();
  }
};

export { handlerKeyMatch };
