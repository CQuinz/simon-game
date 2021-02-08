//******* VARIABLES***********
let newGame = false;
let sequenceNum;
let roundNum = 0;
let colorSequence = [];

// *******CONSTANTS***********
// Colorboxes
const colorBoxes = document.querySelectorAll('.box-color');

// ColorArray that is used with randomNum function to generate random colors
const colorArray =['red','yellow','blue','green']; 

// Button and text elements
const startBtn = document.getElementById('start');
const roundNumText = document.getElementById('roundNumText');


// Generate random color
const randomColor = ()=>{
  let color = Math.floor(Math.random()*4);
  return(colorArray[color]);
}

const animatePlayColor = (color)=>{
  // Play animation
  color.classList.add('full-color');
  // Play sound
  let sound = new Audio(`${colorID}.mp3`);
  sound.play();
  // Remove 'full-color' class from div after 0.3 seconds
  setInterval(()=>{
    color.classList.remove('full-color');
  }, 300);
}

// Get player selected color function
let getPlayerSelectedColor = (e)=>{
  let color =e.srcElement;
 
  let colorID =  color.id;
  console.log(colorID);
  
}


// EventListeners for color boxes
for(i=0;i<colorBoxes.length;i++){
  
  colorBoxes[i].addEventListener('click',getPlayerSelectedColor);
 
}