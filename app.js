// games values

let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

//  ui element

const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// play gain
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }
  //   check if won
  if (guess === winningNum) {
    // //   disable input
    // guessInput.disabled = true;
    // // guessinput border color
    // guessInput.style.borderColor = "green";
    // // set winning message
    // setMessage(`${winningNum} is correct, You Win`, "green");
    gameOver(true, `${winningNum} is correct, You Win`);
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      // //   disable input
      // guessInput.disabled = true;
      // // guessinput border color
      // guessInput.style.borderColor = "red";
      // // set winning message
      // setMessage(`Game Over, winning number is ${winningNum}`, "red");
      gameOver(false, `winning number is ${winningNum}`);
    } else {
      //   game continues - answer wrong
      guessInput.style.borderColor = "red";

      setMessage(`${guess} is not correct, ${guessLeft} Guesses Left`, "black");
      guessInput.value = "";
    }
  }
});

// game over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //   disable input
  guessInput.disabled = true;
  // guessinput border color
  guessInput.style.borderColor = `${color}`;
  // set winning message
  setMessage(msg, color);

  // play Again?
  guessBtn.value = "play Again";
  //
  guessBtn.className += "play-again";
}

// set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//get winning num

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
