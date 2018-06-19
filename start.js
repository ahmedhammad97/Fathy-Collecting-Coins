loadImages();

document.addEventListener("keypress", event =>{
  if(event.keyCode == 13){
    document.getElementById('start').style.display = 'none';
    runGame(GAME_LEVELS,DOMDisplay);
  }
})
