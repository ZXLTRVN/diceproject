const information = document.getElementById('info');

if (window.versions && window.versions.chrome && window.versions.node && window.versions.electron) {
  information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()}) Created by Yolia ✧˖*°࿐ ©`;
} else {
  information.innerText = 'Unable to fetch version information.';
}


const d4Button = document.querySelector(".roll-d4");
const d6Button = document.querySelector(".roll-d6");
const d20Button = document.querySelector(".roll-d20");

const diceElement = document.querySelector(".dice-container");
const rollHistoryElement = document.querySelector(".history-list")

let count = 1;

// Add event listeners for each dice button

// D4 Roll
d4Button.addEventListener("click", () => {
  rollDiceFunction(4);
});

// D6 Roll
d6Button.addEventListener("click", () => {
  rollDiceFunction(6);
});

// D20 Roll
d20Button.addEventListener("click", () => {
  rollDiceFunction(20);
});

function rollDiceFunction(sides) {
  const rollResult = Math.ceil(Math.random() * sides);
  const diceFace = getDiceFaceFunction(rollResult, sides);
  diceElement.innerHTML = diceFace;

  const liElement = document.createElement("li");
  liElement.classList.add("history-item");
  liElement.innerHTML = `Roll ${count}: <span>${diceFace}</span>`;
  rollHistoryElement.appendChild(liElement);
  count++;
}

// Function to get dice face symbols
function getDiceFaceFunction(rollResult, sides) {
  if (sides === 6) {
    switch (rollResult) {
      case 1: return "&#9856;";
      case 2: return "&#9857;";
      case 3: return "&#9858;";
      case 4: return "&#9859;";
      case 5: return "&#9860;";
      case 6: return "&#9861;";
    }
  } else {
    return rollResult; // Just return the number for non-D6 dice
  }
}