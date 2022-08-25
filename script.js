var rock = document.getElementById("rock_image").innerHTML;
var paper = document.getElementById("paper_image").innerHTML;
var scissor = document.getElementById("scissor_image").innerHTML;

var myPix = [rock, paper, scissor];


let playerscoreboard = document.getElementById("player_score").innerHTML;
let computerscoreboard = document.getElementById("computer_score").innerHTML;

playerscoreboard = 0;
computerscoreboard = 0;

let count = 0;




function score() {
    if (document.getElementById("playerbox").innerHTML == rock && document.getElementById("computerbox").innerHTML == scissor || document.getElementById("playerbox").innerHTML == paper && document.getElementById("computerbox").innerHTML == rock || document.getElementById("playerbox").innerHTML == scissor && document.getElementById("computerbox").innerHTML == paper) {
        playerscoreboard += 1;
        document.getElementById("player_score").innerHTML = playerscoreboard;
        document.getElementById("resultdisplay").innerHTML = "PLAYER WIN";
    }
    else if (document.getElementById("playerbox").innerHTML == paper && document.getElementById("computerbox").innerHTML == scissor || document.getElementById("playerbox").innerHTML == scissor && document.getElementById("computerbox").innerHTML == rock || document.getElementById("playerbox").innerHTML == rock && document.getElementById("computerbox").innerHTML == paper) {
        computerscoreboard += 1;
        document.getElementById("computer_score").innerHTML = computerscoreboard;
        document.getElementById("resultdisplay").innerHTML = "COMPUTER WIN";
    }
    else {
        document.getElementById("resultdisplay").innerHTML = "DRAW";
    }
}

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("computerbox").innerHTML = myPix[randomNum];
}

function refresh() {
    window.location.reload();
}

function result() {
    if (playerscoreboard > computerscoreboard) {
        //  document.getElementById("resultdisplay").innerHTML = "..........  PLAYER WIN  ..........";
        alert("........... PLAYER WIN ............")
    }
    else if (computerscoreboard > playerscoreboard) {
        // document.getElementById("resultdisplay").innerHTML = "..........  COMPUTER WIN  ..........";
        alert("..........  COMPUTER WIN  ..........");
    }
    else {
        //  document.getElementById("resultdisplay").innerHTML = "..........  DRAW  ..........";
        alert("..........  DRAW  ..........");
    }
}

function rock_click() {
    count += 1;
    var a = document.getElementById("rock_image").innerHTML;
    document.getElementById("playerbox").innerHTML = a;
    choosePic();
    score();
    if (count >= 5) {
        result();
        window.setInterval('refresh()');
    }
}

function paper_click() {
    count += 1;
    var a = document.getElementById("paper_image").innerHTML;
    document.getElementById("playerbox").innerHTML = a;
    choosePic();
    score();
    if (count >= 5) {
        result();
        window.setInterval('refresh()');
    }
}

function scissor_click() {
    count += 1;
    var a = document.getElementById("scissor_image").innerHTML;
    document.getElementById("playerbox").innerHTML = a;
    choosePic();
    score();
    if (count >= 5) {
        result();
        window.setInterval('refresh()');
    }
}
