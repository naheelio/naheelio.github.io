console.log('hello world');

// -------------------  SETUP -------------------  //
var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// -------------------  VARIABLES -------------------  //

// global variables go here

// -------------------  HELPER FUNCTIONS -------------------  //

// get random int
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------  FUNCTIONS -------------------  //


// skeleton function
function exampleFunction(){

}



// -------------------  DRAW LOOP -------------------  //

function draw(){
	// loop
	requestAnimationFrame(draw);

	// calls


	// debug
	console.log(r);
}

draw();