const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

// draw a square

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);


// animate a square, uncomment to try it out

// ctx.fillStyle = 'red';

// let x = 0;

// function draw() {
//     // call 'draw' every frame
//     requestAnimationFrame(draw);

//     // clear the image drawn on the previous frame
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // move the x position to the right
//     x += 1;

//     // draw a square in the new position
//     ctx.fillRect(x, 10, 100, 100);
// }

// draw();
