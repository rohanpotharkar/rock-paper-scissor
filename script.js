let userscore = 0;
let compscore = 0;
let startuserscore = document.querySelector(".userscore");
let startcompscore = document.querySelector(".compscore");
let choices = document.querySelectorAll(".choice");
let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let message = document.querySelector("#msg");
let reset = document.querySelector("#reset");

let userchoice = null;

//for getting rock choice
stone.addEventListener ("click", () => {
userchoice = "stone";
});
//for getting paper choice
paper.addEventListener ("click", () => {
userchoice = "paper";
});
//for getting scissor choice
scissor.addEventListener ("click", () => {
userchoice = "scissor";
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
let options = ["stone", "paper", "scissor"];

//fuction to get random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//for getting computer's choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (userchoice == "stone") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
    } else if (userchoice == "paper") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
    } else if (userchoice == "scissor") {
      compnum = getRandomInt(3);
      compchoice = options[compnum];
    }
    result();
})
});

//fuction to get result
function result() {
  //for draw game
  if (userchoice == compchoice) {
    message.innerText = "It's Draw! You both selected " + userchoice;
    message.classList.remove("msg2", "msg3");
    message.classList.add("msg");
  } 
  //situation no. 1
  else if (userchoice == "stone" && compchoice == "paper") {
    message.innerText = "You lose! " + " Computer selected " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
    //situation no. 2
  } else if (userchoice == "stone" && compchoice == "scissor") {
    message.innerText = "You Won! " + " Computer selected " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
  } 
  //situation no. 3
  else if (userchoice == "paper" && compchoice == "stone") {
    message.innerText = "You Won! " + " Computer selected " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
    //situation no. 4
  } else if (userchoice == "paper" && compchoice == "scissor") {
    message.innerText = "You lose! " + " Computer selected " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
  }
  //situation no. 5
  else if (userchoice == "scissor" && compchoice == "stone") {
    message.innerText = "You lose! " + " Computer selected " + compchoice;
    message.classList.remove("msg2", "msg");
    message.classList.add("msg3");
    compscore++;
    startcompscore.innerText = compscore;
    //situation no.6
  } else if (userchoice == "scissor" && compchoice == "paper") {
    message.innerText = "You Won! " + " Computer selected " + compchoice;
    message.classList.remove("msg3", "msg");
    message.classList.add("msg2");
    userscore++;
    startuserscore.innerText = userscore;
  }
};









