let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choice=['r','p','s'];
    randomNumber=Math.floor(Math.random()*3)
    return choice[randomNumber];
}

function convertToWord(alphabet) {
    switch (alphabet) {
        case "r":
            return "Rock";
            break;
        case "p":
            return "Paper";
            break;    
        case "s":
            return "Scissors";
            break;
        default:
            break;
    }
}

function win(user,computer) {
    const smallUserWord="(you)".fontsize(3).sub();
    const smallComputerWord="(comp)".fontsize(3).sub();
    const userChoie_div=document.getElementById(user);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} 
        beats ${convertToWord(computer)}${smallComputerWord} . You Win!!!🔥`;
    userChoie_div.classList.add('green-glow');
    setTimeout(()=>userChoie_div.classList.remove('green-glow'),300);
}
function lose(user,computer) {
    const smallUserWord="(you)".fontsize(3).sub();
    const smallComputerWord="(comp)".fontsize(3).sub();
    const userChoie_div=document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord}
        loses to ${convertToWord(computer)}${smallComputerWord} . You lost...😢`;
    userChoie_div.classList.add('red-glow'); 
    setTimeout(()=>userChoie_div.classList.remove('red-glow'),300);   
}
function draw(user,computer) {
    const smallUserWord="(you)".fontsize(3).sub();
    const smallComputerWord="(comp)".fontsize(3).sub();
    const userChoie_div=document.getElementById(user);
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord}
        equals ${convertToWord(computer)}${smallComputerWord} .It,s a draw.!!`;
    userChoie_div.classList.add('gray-glow');  
    setTimeout(()=>userChoie_div.classList.remove('gray-glow'),300);  
}

function game(userChoice) {
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps": 
            lose(userChoice,computerChoice);
            break;
        default : 
            draw(userChoice,computerChoice);
            break;                       
    }
}
function main(){
    rock_div.addEventListener('click',() =>game("r"));
    paper_div.addEventListener('click',() =>game("p"));
    scissors_div.addEventListener('click',() =>game("s"));
} 

main();