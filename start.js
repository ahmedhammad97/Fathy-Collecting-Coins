//loadImages();

var run=false;

document.addEventListener("keypress", event =>{
  if(event.keyCode == 13){
    document.getElementById('start').style.display = 'none';
    pause=false;
    if(!run){run=true; runGame(GAME_LEVELS,DOMDisplay);}
  }
});
