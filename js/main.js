// Title

// Set Canvas Size
canvasSize(600, 400);

// Player Object
let player = {
  x: 300,
  y: 200,
  w: 25,
  h: 25,
  speed: 5,
}

// Main Draw Loop
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  movePlayer();

  // DRAW
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height)


  ctx.strokeStyle = "white";
  ctx.strokeRect(player.x, player.y, player.w, player.h);
  
  

  requestAnimationFrame(draw);
}

// Helper Functions
function movePlayer() {
  if (keyPressed["ArrowUp"]) {
    player.y += -player.speed;
  } else if (keyPressed["ArrowDown"]) {
    player.y += player.speed;
  } else if (keyPressed["ArrowLeft"]) {
    player.x += -player.speed;
  } else if (keyPressed["ArrowRight"]) {
    player.x += player.speed;
  }
}