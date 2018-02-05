var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false && ghosts > 0) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    powerPelletEaten = false;
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home from the Maze to rock out to a headdy Maze jam.')
