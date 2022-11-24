const alldivs = [];
const bodyEle = document.querySelector("main");
let currentPlayer = "o";

for (let i = 0; i < 18; i++) {
  const divEle = document.createElement("div");
  divEle.id = i.toString();
  divEle.className = "tile";
  divEle.dataset.player = "none";
  divEle.dataset.currentplayer = currentPlayer;

  const spanEle = document.createElement("span");

  divEle.append(spanEle);
  bodyEle.append(divEle);
  alldivs.push(divEle);
}

// all divs are present in html
// alldivs = document.querySelectorAll("div");

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
      //check win status
      changeAllcurrentplayers();
    }
  });
});

function changeAllcurrentplayers() {
  alldivs.forEach((div) => {
    div.dataset.currentplayer = currentPlayer;
  });
}
