// document.querySelector(".message").textContent = "🥳 Correct Number!";
// document.querySelector(".number");

let randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "☠ No Number!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > document.querySelector(".highscore").textContent) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < randomNumber ? "📉 Too low!" : "📈 Too  high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦🏻‍♀️ You lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//   else if (guess < randomNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 It's too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🤦🏻‍♀️ You lost!";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess > randomNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too  high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🤦🏻‍♀️ You lost!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
