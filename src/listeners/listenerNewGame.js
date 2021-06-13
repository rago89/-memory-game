import { initBoard } from "../handlers/handlerInitBoard.js";

const newGameButton = document.getElementById('reset');

newGameButton.addEventListener('click', initBoard);