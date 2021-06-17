export const victoryMessage = () => {
  const tiles = document.getElementById("tiles");
  tiles.style.display = "none";
  const divRoot = document.getElementById("root");
  const h2 = document.createElement("h2");
  h2.id = 'congrats';
  h2.innerHTML = "Congratulations";
  h2.classList.add("centered");
  h2.style.fontSize = 80;
  divRoot.append(h2);
};

