import { initBoard } from "../procedures/initBoard.js";

const tableShuffle = () => {
  const table = document.getElementById('tiles');
  const tds = Array.from(table.getElementsByTagName("td"));

  if (tds.some(td => td.dataset.selected === 'no')) {
      initBoard();
      return;
  }
}

export { tableShuffle };