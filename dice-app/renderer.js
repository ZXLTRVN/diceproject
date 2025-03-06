const information = document.getElementById('info');

if (window.versions && window.versions.chrome && window.versions.node && window.versions.electron) {
  information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()}) Created by Yolia ✧˖*°࿐ ©`;
} else {
  information.innerText = 'Unable to fetch version information. Created by Yolia ✧˖*°';
}

const d4Button = document.querySelector(".roll-d4");
const d6Button = document.querySelector(".roll-d6");
const d8Button = document.querySelector(".roll-d8");
const d10Button = document.querySelector(".roll-d10");
const d12Button = document.querySelector(".roll-d12");
const d20Button = document.querySelector(".roll-d20");

const refreshbutton = document.querySelector(".refresh");

const rollHistoryElement = document.querySelector(".history-list");

const diceDisplay = document.querySelector(".dice-display");

var dice = {   //all dice faces in lists
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
};

const images = {   //all dice face images
  d4: {
    1: "./images/d4/d4_roll1.png",
    2: "./images/d4/d4_roll2.png",
    3: "./images/d4/d4_roll3.png",
    4: "./images/d4/d4_roll4.png",
  },
  d6: {
    1: "./images/d6/d6_roll1.jpg",
    2: "./images/d6/d6_roll2.png",
    3: "./images/d6/d6_roll3.png",
    4: "./images/d6/d6_roll4.png",
    5: "./images/d6/d6_roll5.png",
    6: "./images/d6/d6_roll6.png",
  },
  d8: {
    1: "./images/d8/d8_roll1.jpg",
    2: "./images/d8/d8_roll2.png",
    3: "./images/d8/d8_roll3.png",
    4: "./images/d8/d8_roll4.png",
    5: "./images/d8/d8_roll5.png",
    6: "./images/d8/d8_roll6.png",
    7: "./images/d8/d8_roll7.png",
    8: "./images/d8/d8_roll8.png",
  },
  d10: {
    1: "./images/d10/d10_roll1.png",
    2: "./images/d10/d10_roll2.png",
    3: "./images/d10/d10_roll3.png",
    4: "./images/d10/d10_roll4.png",
    5: "./images/d10/d10_roll5.png",
    6: "./images/d10/d10_roll6.png",
    7: "./images/d10/d10_roll7.png",
    8: "./images/d10/d10_roll8.png",
    9: "./images/d10/d10_roll9.png",
    10: "./images/d10/d10_roll10.png",
  },
  d12: {
    1: "./images/d12/d12_roll1.jpg",
    2: "./images/d12/d12_roll2.png",
    3: "./images/d12/d12_roll3.png",
    4: "./images/d12/d12_roll4.png",
    5: "./images/d12/d12_roll5.png",
    6: "./images/d12/d12_roll6.png",
    7: "./images/d12/d12_roll7.png",
    8: "./images/d12/d12_roll8.png",
    9: "./images/d12/d12_roll9.png",
    10: "./images/d12/d12_roll10.png",
    11: "./images/d12/d12_roll11.png",
    12: "./images/d12/d12_roll12.jpg",
  },
  d20: {
    1: "./images/d20/d20_roll1.jpg",
    2: "./images/d20/d20_roll2.png",
    3: "./images/d20/d20_roll3.png",
    4: "./images/d20/d20_roll4.png",
    5: "./images/d20/d20_roll5.png",
    6: "./images/d20/d20_roll6.png",
    7: "./images/d20/d20_roll7.png",
    8: "./images/d20/d20_roll8.png",
    9: "./images/d20/d20_roll9.png",
    10: "./images/d20/d20_roll10.png",
    11: "./images/d20/d20_roll11.png",
    12: "./images/d20/d20_roll12.png",
    13: "./images/d20/d20_roll13.png",
    14: "./images/d20/d20_roll14.png",
    15: "./images/d20/d20_roll15.png",
    16: "./images/d20/d20_roll16.png",
    17: "./images/d20/d20_roll17.png",
    18: "./images/d20/d20_roll18.png",
    19: "./images/d20/d20_roll19.png",
    20: "./images/d20/d20_roll20.jpg",
  },
};

let count = 1;

function diceHistory(result) { //function to record roll history
  const liElement = document.createElement("li");
  liElement.classList.add("history-item");
  liElement.innerHTML = `Roll ${count}: <span>${result}</span>`;
  rollHistoryElement.appendChild(liElement);
  count++;
}

function updateDiceDisplay(diceType, rollResult) {
  const imagePath = images[diceType][rollResult]; // Get the image path based on roll result

  if (imagePath) {
      diceDisplay.innerHTML = `<img src="${imagePath}" alt="${diceType} - ${rollResult}" width="100">`;
  } else {
      diceDisplay.innerHTML = `<p>image_not_displayed ${diceType} roll: ${rollResult}</p>`;
  }

}

// D4 Roll
d4Button.addEventListener("click", () => {
  const d4random =  Math.floor(Math.random() * dice.d4.length);
  const rollResult = dice.d4[d4random];
  diceHistory(rollResult);
  updateDiceDisplay("d4",rollResult);
});

// D6 Roll
d6Button.addEventListener("click", () => {
  const d6random =  Math.floor(Math.random() * dice.d6.length);
  const rollResult = dice.d6[d6random];
  diceHistory(rollResult);
  updateDiceDisplay("d6",rollResult);
});

// D8 Roll
d8Button.addEventListener("click", () => {
  const d8random =  Math.floor(Math.random() * dice.d8.length);
  const rollResult = dice.d8[d8random];
  diceHistory(rollResult);
  updateDiceDisplay("d8",rollResult);
});

// D10 Roll broken
d10Button.addEventListener("click", () => {
  const d10random =  Math.floor(Math.random() * dice.d10.length);
  const rollResult = dice.d10[d10random];
  diceHistory(rollResult);
  updateDiceDisplay("d10",rollResult);
});

// D12 Roll broken
d12Button.addEventListener("click", () => {
  const d12random =  Math.floor(Math.random() * dice.d12.length);
  const rollResult = dice.d12[d12random];
  diceHistory(rollResult);
  updateDiceDisplay("d12",rollResult);
});

// D20 Roll broken
d20Button.addEventListener("click", () => {
  const d20random =  Math.floor(Math.random() * dice.d20.length);
  const rollResult = dice.d20[d20random];
  diceHistory(rollResult);
  updateDiceDisplay("d20",rollResult);
});

//refresh button

function showSweetAlert() {
  Swal.fire({
      title: 'Clear your roll history?',
      text: 'Do you really wanna Persona 3 reload your rolls?',
      imageUrl: './images/aigis.jpg',
      imageHeight: 250,
      imageAlt: 'image_not_displayed',
      showCloseButton: true,
      draggable: true,
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No"
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          rollHistoryElement.innerHTML = "";
          diceDisplay.innerHTML = ""
          count = 1;
          Swal.fire("All cleared!", "", "success");
        } else if (result.isDenied) {

          Swal.fire({
            title: "You may continue rolling dice",
            text: "And disturbing the peaceeeee~",
            imageUrl: './images/p3.jpg', //edit this
            imageHeight: 250,
            imageAlt: 'image_not_displayed',
          });

        }
      });
}