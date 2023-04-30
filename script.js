// given number of squares high and wide, draw a squares by squares grid of divs
function drawBoard (squares) {
  //rows
  for (let i = 0; i < squares; i++) {
    let board = document.querySelector("#board");
    let row = document.createElement("div");
    row.classList.add("row");

    //columns
    for (let j = 0; j < squares; j++) {
      let square = document.createElement("div");
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

drawBoard(16); // initial board