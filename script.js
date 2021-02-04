//******* VARIABLES***********
let newGame = false;
let sequenceNum;
let roundNum = 0;
let colorArray =[];

// *******CONSTANTS***********
// Colorboxes
// const red = document.getElementById('red');
// const yellow = document.getElementById('yellow');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
const colorBoxes = document.querySelectorAll('.box-color');

// Button and text elements
const startBtn = document.getElementById('start');
const roundNumText = document.getElementById('roundNumText');



// Play Function

let play = (e)=>{
  let color =e.srcElement;
  color.classList.add('full-color');
  setInterval(()=>{
    color.classList.remove('full-color');
  }, 250);
}


// EventListeners for color boxes
for(i=0;i<colorBoxes.length;i++){
  colorBoxes[i].addEventListener('click',play);
}