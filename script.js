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
  let playerColor =e.srcElement;
  console.log(playerColor.id);
 
 return animatePlayColor(playerColor.id);
  
}

// EventListeners for color boxes
for(i=0;i<colorBoxes.length;i++){ 
  colorBoxes[i].addEventListener('click',getPlayerSelectedColor);
  // Put inside PlayGame function?
}

// PLAY GAME FUNCTION
const playGame = ()=>{
  newGame = true;

  while (newGame ===true) {
    let newColor = randomColor();
    colorSequence.push(newColor);
    let sequenceLength = colorSequence.length;
    let colorsPlayed =0;

    // colorSequence.forEach((color) =>{

    //   if(colorsPlayed ===sequenceLength){
    //     newGame = false;
    //   }else{
    //   setInterval(()=>{
    //     animatePlayColor(color);
    //     colorsPlayed++;
    //     }, 2000);
    //   });
    // }
    // animatePlayColor(newColor);

    console.log("ColorSequence: " + colorSequence);
    console.log('RoundNum: ' + roundNum++);

    // Logic for Player interaction
    
  }
  
}

startBtn.addEventListener('click', playGame);

let arrayColor =['green', 'blue', 'red', 'yellow', 'blue', 'red'];
let playArray = ()=>{

  // Swiped code from stackover flow: https://stackoverflow.com/questions/46354221/javascript-how-to-loop-through-every-arrays-item-every-second/46354256
  // ************************************
  let index = 0;
  let interval = setInterval(function(){
    animatePlayColor(arrayColor[index++]);
     if(index == arrayColor.length){
        clearInterval(interval);
     }
    //***************************************

    }, 2000);
}
