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

let colorsPlayed =0;
// PLAY GAME FUNCTION
const playGame = ()=>{
  // newGame = true;


  const playColorSequence = ()=>{
    let newColor = randomColor();
    colorSequence.push(newColor);
    colorsPlayed++;
    
  // Swiped code from stackover flow: https://stackoverflow.com/questions/46354221/javascript-how-to-loop-through-every-arrays-item-every-second/46354256
  // ************************************
  let index = 0;
  let interval = setInterval(function(){
    animatePlayColor(colorSequence[index++]);
     if(index == colorSequence.length){
        clearInterval(interval);
     }
    //***************************************
    console.log("ColorSequence: " + colorSequence);
    console.log('RoundNum: ' + roundNum);
    console.log('ColorsPlayed: ' + colorsPlayed);
    }, 2000);

    
    
  }

  if(colorsPlayed ===colorSequence.length){
    roundNum++;
    playColorSequence();
    
    
  }
    

    
  
  
}

startBtn.addEventListener('click', playGame);

let arrayColor =['green', 'blue', 'red', 'yellow', 'blue', 'red'];
let playArray = ()=>{

 
}
