// Use a JavaScript DOM method to assign this global variable to the HTML element
const doorImage1 = document.getElementById('door_a');
const doorImage2 = document.getElementById('door_b');
const doorImage3 = document.getElementById('door_c');
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let numClosedDoors = 3;

// global variables door path
const flyDoorPath = 'findfly.png';
const oceanDoorPath = 'ocean.png';
const forestDoorPath = 'forest.png';
const closedDoorPath = 'door_closed.png'

// They’ll be assigned values within your randomFindDoorGenerator() function.
let openDoor1 ;
let openDoor2 ;
let openDoor3 ;

const isFly = (door) => {
  return door.src.includes(flyDoorPath);
  // if (door.src === flyDoorPath) {
  //   return true;
  // } else {
  //   return false;
  // }
}
function isClicked(door) {
  return !door.src.includes(closedDoorPath);
  // if (door.src === closedDoorPath) {
  //   return false;
  // } else {
  //   return true;
  // }
}
function playDoor (door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win')
  }  else if (isFly(door)) {
    gameOver()  
  }
}

// randomly generate the door
const randomFindDoorGenerator = () => {
  let findDoor = Math.floor(Math.random() * numClosedDoors)

  if (findDoor === 0) {
    openDoor1 = flyDoorPath;
    openDoor2 = oceanDoorPath;
    openDoor3 = forestDoorPath;
  } else if (findDoor === 1) {
    openDoor1 = oceanDoorPath;
    openDoor2 = flyDoorPath;
    openDoor3 = forestDoorPath;
  } else {
    openDoor1 = forestDoorPath;
    openDoor2 = oceanDoorPath;
    openDoor3 = flyDoorPath;
  }
};
// use a .onclick methods for door is clickable
doorImage1.onclick = () => {  
  if (currentlyPlaying  && !isClicked(doorImage1)) {    
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }  
}
doorImage2.onclick = () => {  
  if (currentlyPlaying  && !isClicked(doorImage2)) {    
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {  
  if (currentlyPlaying  && !isClicked(doorImage3)) {    
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }   
}

// result status
function gameOver(status) {  
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

const startRound = () => {
  doorImage1.src = closedDoorPath; 
  doorImage2.src = closedDoorPath; 
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomFindDoorGenerator();
}

// call function
startRound();