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

// redraw board based on user input height and width in squares
function redrawBoard () {
  let squares = prompt(
    "Please enter an integer between 1 and 100 (default 16)", "16"
  );

  // validate user input and convert to Number
  while (!(squares = Number(squares)) || squares < 1 || squares > 100) {
    squares = prompt("Error: Please enter an integer between 1 and 100", "16");
  }
  
  clearBoard();
  drawBoard(squares);
}

const redrawButton = document.querySelector("#redraw");
redrawButton.addEventListener("click", redrawBoard);

drawBoard(16); // initial board