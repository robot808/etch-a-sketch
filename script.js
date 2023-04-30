// remove all children of board div
function clearBoard () {
  const board = document.querySelector("#board");
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
}

// given number of squares high and wide, draw a squares by squares grid of divs
function drawBoard (squares) {
  const board = document.querySelector("#board");

  // rows
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // columns
    for (let j = 0; j < squares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", changeColor);
      row.appendChild(square);
    }

    board.appendChild(row);
  }
}

// given an event, change the background color of the target square div
function changeColor (event) {
  const square = event.target;
  square.style.backgroundColor = "#000000";
}

const redrawButton = document.querySelector("#redraw");
// redraw board based on user input height and width in squares
redrawButton.addEventListener("click", () => {
  const squares = prompt("How many squares high and wide would you like the board to be?");
  clearBoard();
  drawBoard(squares);
});

drawBoard(16); // initial board