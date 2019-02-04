// declare y
var y;

// set function to scroll down by y
function autoscroll(){
	self.scrollBy(0,y)
}

// set function to continuously scroll every .1 seconds
function playautoscroll(){
	y = 1;
	setInterval('autoscroll()',0.1);
}

// call looping function on page load
window.onload=playautoscroll;

$(function(){
    $(".legend").typed({
        strings: ["I'm a product designer at Google NYC."
        + "<br>" + "^850 I work primarily on launching v1 products."
        + "<br>" + " "
        + "<br>" + "^850 ↳ naheelj.92@gmail.com"
        + "<br>" + " "
        + "<br>" + " "
        + "<br>" + "^850 Notable projects (e-mail for details):"
        + "<br>" + " "
        + "<br>" + "^600 ❶ AR for Google Maps"
        + "<br>" + "^600 ❷ Google AR/VR for Classrooms"
        + "<br>" + "^600 ❸ Secret Music Innovation Project at Google"
        + "<br>" + "^600 ❹ Google NYC Artist in Residence"       
        + "<br>" + "^600 ❺ Kids Take Over ⟶ New Hip Hop Media Outlet Brand Launch"
        + "<br>" + "^600 ❻ Google Arts and Culture AR Prototyping"
        + "<br>" + " "
        + "<br>" + " "
        + "<br>" + "^850 ↳ naheelj.92@gmail.com"
        ],
        startDelay: 4400,
        typeSpeed: 4,
        backSpeed: 10,
    });

});

