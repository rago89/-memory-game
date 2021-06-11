import { handlerSelectedKey } from "../handlers/ handlerSelectedKey.js";

const tableTiles = document.getElementById("tiles");

tableTiles.addEventListener("click", handlerSelectedKey);

export { tableTiles };
