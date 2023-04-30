// remove all children of board div
function clearBoard () {
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
}

// given number of squares high and wide, draw a squares by squares grid of divs
function drawBoard (squares) {
  // rows
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // columns
    for (let j = 0; j < squares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", currentMode);
      row.appendChild(square);
    }

    board.appendChild(row);
  }
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

// given an event, change the background color of the target square div
function paintBlack (event) {
  const square = event.target;
  square.style.backgroundColor = "#000000";
}

// given a mode button's click event, change paint mode accordingly
function changeMode (event) {
  let newMode;

  // given clicked button's id, determine which function should be used
  switch (event.target.id) {
    case "normal":
      newMode = paintBlack;
      break;
    case "gradient":
      newMode = paintDarken;
      break;
    case "rainbow":
      newMode = paintRandom;
      break;
    default:
      return;
  }

  // for each square div, remove old event listener and add a new one
  board.child.foreach(row => {
    row.children.foreach(square => {
      square.removeEventListener("mouseover", currentMode);
      square.addEventListener("mouseover", newMode);
    });
  });

  // keep track of most recent mode
  currentMode = newMode;
}

const board = document.querySelector("#board");
const buttons = document.querySelector("div.buttons");
let currentMode = paintBlack;

buttons.childNodes.forEach(button => {
  if (button.id === "redraw") {
    button.addEventListener("click", redrawBoard);
  }
  else {
    button.addEventListener("click", changeMode);
  }
});

drawBoard(16); // initial board