const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset_btn"); // Selecting only one reset button
const gameBox = document.querySelector(".game_container"); // Selecting only one game container
const message = document.querySelector(".win-msg"); // Selecting only one win message container
const newGameMessage = document.querySelector(".new_game"); // Selecting only one new game message container

let turnO = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const showWinner = (winner) => {
  message.innerText = `Congratulations! The winner is ${winner}`;
  gameBox.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        for (box of boxes) {
          box.disabled = true;
        }
        showWinner(posVal1);

        break;
      }
    }
  }
};

// Reset functionality can be added to resetBtn if needed
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  message.innerText = "";
  gameBox.classList.add("hide");
  turnO = true;
});

//NEW GAME BUTTON
newGameMessage.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    turnO = true;
  });
});
