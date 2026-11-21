let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let acceptingInput = false;

let h2 = document.querySelector("h2");

// FIX: start the game automatically (no key press needed)
window.addEventListener("load", function () {
  startGame();
});

function startGame() {
  if (started) return;
  started = true;
  console.log("Game is started");
  levelUp();
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIdx];
  gameSeq.push(randColor);
  console.log(gameSeq);

  acceptingInput = false;
  playSequence();
}

function playSequence() {
  let i = 0;
  let interval = setInterval(function () {
    let btn = document.querySelector(`.${gameSeq[i]}`);
    btnFlash(btn);
    i++;
    if (i >= gameSeq.length) {
      clearInterval(interval);
      setTimeout(function () {
        acceptingInput = true;
      }, 350);
    }
  }, 600);
}

function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      acceptingInput = false;
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game over! You reached level ${level}. Restarting...`;

    // FIX: turn the background red for 1 second on wrong click
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
      document.body.style.backgroundColor = "";
    }, 1000);

    started = false;
    acceptingInput = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    // FIX: auto-restart after the red flash (1s) + a short pause
    setTimeout(startGame, 1500);
  }
}

function btnPress() {
  if (!acceptingInput) return;

  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}