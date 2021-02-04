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
  // Play animation
  color.classList.add('full-color');
  // Play sound
  // let colorID = "'" + color.id + "'";
  let colorID =  color.id;
  let sound = new Audio(`${colorID}.mp3`);
  // let sound = new Audio("blue.mp3");
  sound.play();
  console.log(colorID);
  setInterval(()=>{
    color.classList.remove('full-color');
  }, 300);
  

}


// EventListeners for color boxes
for(i=0;i<colorBoxes.length;i++){
  
  colorBoxes[i].addEventListener('click',play);
  


}