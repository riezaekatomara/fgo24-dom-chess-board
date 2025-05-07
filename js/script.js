const title = document.createElement("h1");
title.textContent = "Chess Board";

const chessboardContainer = document.createElement("div");
chessboardContainer.setAttribute("id", "chessboard");
chessboardContainer.setAttribute("class", "chessboard");

document.body.prepend(chessboardContainer);
document.body.prepend(title);

function createChessboard() {
  const chessboardElement = document.getElementById("chessboard");
  const size = 8;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const square = document.createElement("div");
      square.className = "square";

      if ((row + col) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      chessboardElement.appendChild(square);
    }
  }
}

createChessboard();
