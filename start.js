var run=false;
var specialKey = "Enter";

document.addEventListener("keypress", event =>{
  if(event.key == specialKey){
    document.getElementById('start').style.display = 'none';
    document.getElementById('enter').innerText = 'Press Esc again to keep playing';
    pause=false;
    specialKey = "Bla";
    if(!run){run=true; runGame(GAME_LEVELS,DOMDisplay);}
  }
});

//Play Sounds
var testAudio = new Audio("https://fathycoins.000webhostapp.com/music/coin.mp3");
testAudio.volume = 0.0;
testAudio.play();

testAudio = new Audio("https://fathycoins.000webhostapp.com/music/lose.mp3");
testAudio.play();

testAudio = new Audio("https://fathycoins.000webhostapp.com/music/win.mp3");
testAudio.play();
