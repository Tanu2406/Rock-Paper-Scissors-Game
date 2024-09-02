let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () =>{
   const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () =>{
    msg.innerHTML = "Game was Draw. Play again.";
    msg.style.backgroundColor = '#081b31';
};

const showWinner =(userWin, userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        
    }else{
        compscore++;
        compScorePara.innerHTML = compscore;
        msg.innerHTML = `You lost. ${compChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor = 'red';
    }
}


const playGame =(userChoice) =>{
    //generate comp choice
  const compChoice = getCompChoice();
  
  if(userChoice === compChoice){
    //Draw game
   drawGame();
  }else{
  let userWin = true;
  if(userChoice == "rock"){
    //scissors,paper
    userWin = compChoice==="paper"?false:true;
      
  }else if(userChoice == "paper"){
    //scissors,rock
    userWin = compChoice==="scissors"?false:true;
     
  }else{
    //rock,paper
    userWin = compChoice==="rock"?false:true;
    
  } showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
   
});