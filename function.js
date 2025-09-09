let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".borders");
const anounce = document.querySelector("#winning_anounce");

const drawGame = () => {
  anounce.innerText = "Game Draw !!";
  anounce.style.backgroundColor = "darkcyan";
};

const showWinner = (userWin) => {
  if (userWin) {
    anounce.innerText = "You Win !!";
    anounce.style.backgroundColor = "green";
  } else {
    anounce.innerText = "You Loose !! Computer Wins";
    anounce.style.backgroundColor = "red";
  }
};

//computer random moves .
const comChoce = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const playGame = (checkId) => {
  //acces computer random moves .
  const computerChoice = comChoce();

  if (checkId === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (checkId === "Rock") {
      // scissors , paper
      userWin = computerChoice === "Paper" ? false : true;
    } else if (checkId == "Paper") {
      // rock , scissors
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      // paper , rock
      userWin = computerChoice === "Rock" ? false : true;
    }

    showWinner(userWin);
  }
};

//acces our choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const checkId = choice.getAttribute("id");
    playGame(checkId);
  });
});
