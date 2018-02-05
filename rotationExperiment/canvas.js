console.log('hello world');

// -------------------  SETUP -------------------  //

var movingBlock = document.getElementById("movingBlock");
var body = document.body;

// -------------------  VARIABLES -------------------  //

// global variables go here


// -------------------  HELPER FUNCTIONS -------------------  //

// get random int
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(rMin, rMax, gMax, gMin, bMax, bMin) {
    var r = Math.floor(Math.random() * (rMax - rMin + 1)) + rMin;
    var g = Math.floor(Math.random() * (gMax - gMin + 1)) + gMin;
    var b = Math.floor(Math.random() * (bMax - bMin + 1)) + bMin;
    return 'rgb(' + r +',' + g +',' + b +')'
}

// -------------------  FUNCTIONS -------------------  //

function movement(){
	movingBlock.style.left = event.beta + "px";
	movingBlock.style.top = event.alpha + "px";
}

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // Do stuff with the new orientation data
  console.log(event.absolute);
  console.log(event.alpha);
  console.log(event.beta);
  console.log(event.gamma);

}

// -------------------  EVENT HANDLERS -------------------  //

// orientation
window.addEventListener("deviceorientation", handleOrientation, true);

// -------------------  DRAW LOOP -------------------  //

function draw(){
	// loop
	requestAnimationFrame(draw);

	// calls
	movement();

	// debug

}

draw();