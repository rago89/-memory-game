import { initBoard } from "../procedures/initBoard.js";

const newGame = () => {
    //const body = document.getElementById('body');
    const table = document.getElementById('tiles');
    const tds = Array.from(table.getElementsByTagName("td"));
    const h2Congrats = document.getElementById('congrats');
    if (tds.some(td => td.dataset.selected === 'no'))
    {
        initBoard();
        return;
    } else if (tds.every(td => td.dataset.selected === 'yes')) {
        const tiles = document.getElementById("tiles");
        h2Congrats.remove('');
        tiles.style.display = "";
        initBoard();
    }
}

export { newGame };