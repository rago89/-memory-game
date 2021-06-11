import { handlerNewGame } from '../handlers/handlerNewGame.js';

const newGameButton = document.getElementById('reset');

newGameButton.addEventListener('click', handlerNewGame);