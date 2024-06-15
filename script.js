let userscore = 0;
let compscore = 0;
let startuserscore = document.querySelector(".userscore");
let startcompscore = document.querySelector(".compscore");
let choices = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let message = document.querySelector("#msg");
let reset = document.querySelector("#reset");

let userchoice = null;

//for getting rock choice
rock.addEventListener ("click", () => {
userchoice = "rock";
console.log(userchoice);
});
//for getting paper choice
paper.addEventListener ("click", () => {
userchoice = "paper";
console.log(userchoice);
});
//for getting scissor choice
scissor.addEventListener ("click", () => {
userchoice = "scissor";
console.log(userchoice);
});
//for resetting the game
reset.addEventListener ("click", () => {
   startcompscore.innerText = 0;
   startuserscore.innerText = 0;
   userscore = startuserscore.innerText;
   compscore = startcompscore.innerText;
   message.innerText = "Let's Gooo!";
   message.classList.add("msg");
   message.classList.remove("msg2");
   message.classList.remove("msg3");
})

let compnum = null;
let compchoice = null;
let options = ["rock", "paper", "scissor"];

//fuction to get random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//for getting computer's choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (userchoice == "rock") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
      console.log(compchoice);
    } else if (userchoice == "paper") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
      console.log(compchoice);
    } else if (userchoice == "scissor") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
      console.log(compchoice);
    }
    result();
})
});

//fuction to get result
function result() {
  //for draw game
  if (userchoice == compchoice) {
    message.innerText = "Game was a draw. You both selected " + userchoice;
    message.classList.remove("msg2", "msg3");
    message.classList.add("msg");
  } 
  //situation no. 1
  else if (userchoice == "rock" && compchoice == "paper") {
    message.innerText = "You lose. Your " + userchoice + " covered by " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
    //situation no. 2
  } else if (userchoice == "rock" && compchoice == "scissor") {
    message.innerText = "You Won! Your " + userchoice + " destroyed " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
  } 
  //situation no. 3
  else if (userchoice == "paper" && compchoice == "rock") {
    message.innerText = "You Won! Your " + userchoice + " covered " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
    //situation no. 4
  } else if (userchoice == "paper" && compchoice == "scissor") {
    message.innerText = "You lose! Your " + userchoice + " cut by " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
  }
  //situation no. 5
  else if (userchoice == "scissor" && compchoice == "rock") {
    message.innerText = "You lose! Your " + userchoice + " destroyed by " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
    //situation no.6
  } else if (userchoice == "scissor" && compchoice == "paper") {
    message.innerText = "You Won! Your " + userchoice + " cut " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
  }
};









