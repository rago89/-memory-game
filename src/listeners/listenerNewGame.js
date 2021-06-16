import { newGame } from "../handlers/handlerNewGame.js"; 

const newGameButton = document.getElementById('reset');

newGameButton.addEventListener('click', newGame);