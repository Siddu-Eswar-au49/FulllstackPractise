const alldivs = document.querySelectorAll("div");

let currentPlayer = "o";

alldivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    let divele = e.target;
    if (e.target.tagName == "SPAN") {
      divele = e.target.parentElement;
    }
    if (divele.dataset.player == "none") {
      divele.dataset.player = currentPlayer;
      //currentPlayer = currentPlayer == "o" ? "x" : "o";
      if (currentPlayer == "o") {
        currentPlayer = "x";
      } else {
        // curre = x
        currentPlayer = "o";
      }
      changeAllcurrentplayers();
    }
  });
});

function changeAllcurrentplayers() {
  alldivs.forEach((div) => {
    div.dataset.currentplayer = currentPlayer;
  });
}
