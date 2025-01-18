let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#computer-score");


const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "rgb(2, 2, 51)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++
        userScorePare.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++
        compScorePare.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genComputrtChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const playGame = (userChoice) => {
    console.log("User choice = " ,userChoice);
    const compChoice = genComputrtChoice();
    console.log("Computer choice = " ,compChoice);

    if(userChoice == compChoice){
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
