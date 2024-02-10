let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let scoreUser = document.querySelector("#user-score");
let scoreComp = document.querySelector("#comp-score");
let restart = document.querySelector("#msg");
let display = document.querySelector("#msge");

const getRandOutpt = () => {
  let options = ["paper", "rock", "scissor"];
  const genComp = Math.floor(Math.random() * 3);
  console.log(`computer's choice is ${options[genComp]}`);
  return options[genComp];
};

let user = choices.forEach((child) => {
  let userChoice = child.getAttribute("id");
  child.addEventListener("click", () => {
    console.log(`user's choice is ${userChoice}`);
    let comp = getRandOutpt();
    if (comp == userChoice) {
      console.log("Draw");
      display.style.color = "black";
      display.innerText = `you both selected ${userChoice}`;
    } else if (comp == "paper" && userChoice == "rock") {
      console.log("winner is computer");
      display.style.color = "blue";
      display.innerText = "computer selected Paper ";
      compScore++;
    } else if (comp == "rock" && userChoice == "scissor") {
      console.log("winner is computer");
      display.style.color = "blue";
      display.innerText = "computer selected Rock ";
      compScore++;
    } else if (comp == "scissor" && userChoice == "paper") {
      console.log("winner is computer");
      display.style.color = "blue";
      display.innerText = "computer selected Scissor ";
      compScore++;
    } else if (comp == "paper" && userChoice == "scissor") {
      console.log("winner is user");
      display.style.color = "blue";
      display.innerText = "computer selected Paper ";
      userScore++;
    } else if (comp == "scissor" && userChoice == "rock") {
      console.log("winner is user");
      display.style.color = "blue";
      display.innerText = "computer selected Scissor ";
      userScore++;
    } else if (comp == "rock" && userChoice == "paper") {
      console.log("winner is user");
      display.style.color = "blue";
      display.innerText = "computer Selected Rock ";
      userScore++;
    }

    console.log(`userScore is ${userScore}`);
    scoreUser.innerText = userScore;
    console.log(`compScore is ${compScore}`);
    scoreComp.innerText = compScore;

    restart.addEventListener("click", () => {
      console.log("game reset");
      scoreUser.innerText = "0";
      scoreComp.innerText = "0";
      display.innerText = " ";
    });
  });
});
