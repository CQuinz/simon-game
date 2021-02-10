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
  let colorNum = Math.floor(Math.random()*4);
  
  return(colorArray[colorNum]);
}

const animatePlayColor = (selectedColor)=>{
  // Play animation
  // Get element by id
  let colorID = document.getElementById(`${selectedColor}`);

  colorID.classList.add('full-color');
  // console.log(color);
  // Play sound
  let sound = new Audio(`${selectedColor}.mp3`);
  sound.play();

  // Remove 'full-color' class from div after 0.3 seconds
  setInterval(()=>{
    colorID.classList.remove('full-color');
  }, 400);
}

// Get player selected color function
let getPlayerSelectedColor = (e)=>{
  let color =e.srcElement;
 
  // console.log(color.id);
  animatePlayColor(color.id);
  
}

// EventListeners for color boxes
for(i=0;i<colorBoxes.length;i++){ 
  colorBoxes[i].addEventListener('click',getPlayerSelectedColor);
}

// PLAY GAME FUNCTION
const playGame = ()=>{
  newGame = true;

  while (newGame ===true) {
    let newColor = randomColor();
    colorSequence.push(newColor);
    animatePlayColor(newColor);
    console.log(colorSequence);
    console.log(roundNum++);
    newGame = false;

  }
}

startBtn.addEventListener('click', playGame);
