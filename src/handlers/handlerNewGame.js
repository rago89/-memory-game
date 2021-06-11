import { initBoard } from '../procedures/initBoard.js'

const handlerNewGame = (event) => {
  const target = event.target;
    return initBoard();
}

export { handlerNewGame }