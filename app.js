// games values

let min = 1,
  max = 10,
  winningNum = 2,
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

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }
  if (guess === winningNum) {
    //   disable input
    guessInput.disabled = true;
    // guessinput border color
    guessInput.style.borderColor = "green";
    // set winning message
    setMessage(`${winningNum} is correct, You Win`, "green");
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
