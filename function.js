let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".borders");
const anounce = document.querySelector("#winning_anounce");
const UserScore = document.querySelector("#user_score");
const computerScore = document.querySelector("#comp-score");

const drawGame = () => {
  anounce.innerText = "Game Draw !!";
  anounce.style.backgroundColor = "darkcyan";
};

const showWinner = (userWin, checkId, computerChoice) => {
  if (userWin) {
    anounce.innerText = `You Winn , Your ${checkId} beats ${computerChoice}`;
    anounce.style.backgroundColor = "green";
    myScore++;
    UserScore.innerText = myScore;
  } else {
    anounce.innerText = `Computer Wins ${computerChoice} beats Your ${checkId}`;
    anounce.style.backgroundColor = "red";
    compScore++;
    computerScore.innerText = compScore;
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

    showWinner(userWin, checkId, computerChoice);
  }
};

//acces our choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const checkId = choice.getAttribute("id");
    playGame(checkId);
  });
});
