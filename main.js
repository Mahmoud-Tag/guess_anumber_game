let inputBox = document.getElementById("box");
let submitButton = document.querySelector("button.submit");
let resetButton = document.querySelector("button.reset");
let startNum = 1; //the number of tries, start from 1 and end with 10
let tipsText = document.querySelector("p.showTips");
let congratsText = document.querySelector("h2.success");
let prvGuess = document.getElementById("prv_guesses");
let lastChance = document.getElementById("lastChance");

// an algorithm that generate random number
const randomNum = parseInt(startNum + Math.random() * 99);

//add event listener to the button when it is clicked
submitButton.addEventListener("click", () => {
  let prvGuessVal = [];
  prvGuessVal.push(inputBox.value);

  if (inputBox.value > 100 || inputBox.value < 1) {
    tipsText.innerHTML = "⚠️ Enter a number in the allowed range[1-100]";
    prvGuessVal.pop(inputBox.value);
    prvGuess.innerHTML += "\t";
    startNum--;
  } else {
    prvGuessVal.forEach((e) => {
      prvGuess.innerHTML += "\t" + e;
    });
  }
  if (inputBox.value > randomNum && inputBox.value <= 100) {
    tipsText.innerHTML =
      "<span>Wrong!</span><br><br>💫The Number You Entered Is <b> Larger Than </b>The Guessed Number";
  } else if (inputBox.value < randomNum && inputBox.value >= 1) {
    tipsText.innerHTML =
      "<span>Wrong!</span><br><br>💫The Number You Entered Is <b> Less Than </b>The Guessed Number";
  } else if (inputBox.value == randomNum) {
    tipsText.innerHTML = "";
    congratsText.innerHTML = "CONGRATULATIONS!🎊🎊🎉";
    resetButton.style.display = "block";
    submitButton.style.display = "none";
    prvGuess.innerHTML = `You Success After ${startNum} Turns`;
    inputBox.disabled = true;
    lastChance.innerHTML = "";
  }
  startNum++;
  if (startNum == 10) {
    lastChance.innerHTML = `⚠ Last Chance`;
  } else if (startNum == 11 && inputBox.value != randomNum) {
    tipsText.innerHTML =
      "🚨We Are Sorry! You Are Failed After Your Available Tries,<br>Try Again 🔁";
    lastChance.innerHTML = "";
    inputBox.disabled = true;
    submitButton.style.display = "none";
    resetButton.style.display = "block";
  }
});
// Reset button functionality
resetButton.addEventListener("click", () => {
  location.reload();
});
