const initBoard = () => {
    const tds = Array.from(document.getElementById("tiles").getElementsByTagName("td"));
    // https://javascript.info/task/shuffle
    const shuffledTds = [...tds.sort(() => Math.random() - 0.5)];
  
    for (let filler = 0; filler < tds.length / 2; filler++) {
      for (let i = 0; i < 2; i++) {
        const td = shuffledTds.pop();
        td.innerHTML = filler;
        td.className = "hidden";
        td.dataset.selected = "no";
      }
    }
  };
  
  export { initBoard };