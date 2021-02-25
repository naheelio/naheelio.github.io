// declare y
var y;

var nightScroll = 1100;
var isNight = false;

var dayScroll = 2050;
var isDay = true;

var snapScroll = 5600;
var isSnap = false;


$(window).scroll(changeColors);

function changeColors() {
  var currentScroll = $(window).scrollTop();
  console.log("Scroll from Top: " + currentScroll.toString());

  if(currentScroll >= nightScroll && currentScroll < dayScroll && isNight == false && isDay == true && isSnap == false){
  	console.log("bed time");
 
    document.getElementById("animateBackgroundSpot").classList.add("animate-night-bkg");

  	document.getElementById("animateHeader").classList.add("animate-night-header");
  	document.getElementById("animateSubHeader").classList.add("animate-night-subheader");

  	document.getElementById("animateCard1").classList.add("animate-night-card");
  	document.getElementById("animateCard2").classList.add("animate-night-card");
  	document.getElementById("animateCard3").classList.add("animate-night-card");
  	document.getElementById("animateCard4").classList.add("animate-night-card");
  	document.getElementById("animateCard5").classList.add("animate-night-card");
  	document.getElementById("animateCard6").classList.add("animate-night-card");
  	document.getElementById("animateCard7").classList.add("animate-night-card");
  	
  	document.getElementById("animateTextTitle1").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle2").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle3").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle4").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle5").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle6").classList.add("animate-night-textTitle"); 
  	document.getElementById("animateTextTitle7").classList.add("animate-night-textTitle"); 

  	document.getElementById("animateTextBody1").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody2").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody3").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody4").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody5").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody6").classList.add("animate-night-textBody");
  	document.getElementById("animateTextBody7").classList.add("animate-night-textBody");

  	document.getElementById("animateSlideNumber1").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber2").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber3").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber4").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber5").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber6").classList.add("animate-night-slideNumber");
  	document.getElementById("animateSlideNumber7").classList.add("animate-night-slideNumber");

  	document.getElementById("animateFooter").classList.add("animate-night-footer");
  	document.getElementById("animateFooterContact").classList.add("animate-night-footerContact");






  	isNight = true;
  	isDay = false;
  }

  if(currentScroll >= dayScroll && isDay == false && isNight == true && isSnap == false){
  	console.log("day again");
 
    document.getElementById("animateBackgroundSpot").classList.add("animate-day-bkg");

  	document.getElementById("animateHeader").classList.add("animate-day-header");
  	document.getElementById("animateSubHeader").classList.add("animate-day-subheader");

  	document.getElementById("animateCard1").classList.add("animate-day-card");
  	document.getElementById("animateCard2").classList.add("animate-day-card");
  	document.getElementById("animateCard3").classList.add("animate-day-card");
  	document.getElementById("animateCard4").classList.add("animate-day-card");
  	document.getElementById("animateCard5").classList.add("animate-day-card");
  	document.getElementById("animateCard6").classList.add("animate-day-card");
  	document.getElementById("animateCard7").classList.add("animate-day-card");
  	
  	document.getElementById("animateTextTitle1").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle2").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle3").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle4").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle5").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle6").classList.add("animate-day-textTitle"); 
  	document.getElementById("animateTextTitle7").classList.add("animate-day-textTitle"); 

  	document.getElementById("animateTextBody1").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody2").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody3").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody4").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody5").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody6").classList.add("animate-day-textBody");
  	document.getElementById("animateTextBody7").classList.add("animate-day-textBody");

  	document.getElementById("animateSlideNumber1").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber2").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber3").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber4").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber5").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber6").classList.add("animate-day-slideNumber");
  	document.getElementById("animateSlideNumber7").classList.add("animate-day-slideNumber");

  	document.getElementById("animateFooter").classList.add("animate-day-footer");
  	document.getElementById("animateFooterContact").classList.add("animate-day-footerContact");

  	isDay = true;
  	isNight = false;
  }

  if(currentScroll > snapScroll && isSnap == false){
  	console.log("Snap World");
   	
    document.getElementById("animateBackgroundSpot").classList.add("animate-spot-bkg");

  	document.getElementById("animateHeader").classList.add("animate-snap-header");
  	document.getElementById("animateSubHeader").classList.add("animate-snap-subheader");

  	document.getElementById("animateCard1").classList.add("animate-snap-card");
  	document.getElementById("animateCard2").classList.add("animate-snap-card");
  	document.getElementById("animateCard3").classList.add("animate-snap-card");
  	document.getElementById("animateCard4").classList.add("animate-snap-card");
  	document.getElementById("animateCard5").classList.add("animate-snap-card");
  	document.getElementById("animateCard6").classList.add("animate-snap-card");
  	document.getElementById("animateCard7").classList.add("animate-snap-card");
  	
  	document.getElementById("animateTextTitle1").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle2").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle3").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle4").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle5").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle6").classList.add("animate-snap-textTitle"); 
  	document.getElementById("animateTextTitle7").classList.add("animate-snap-textTitle"); 

  	document.getElementById("animateTextBody1").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody2").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody3").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody4").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody5").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody6").classList.add("animate-snap-textBody");
  	document.getElementById("animateTextBody7").classList.add("animate-snap-textBody");

  	document.getElementById("animateSlideNumber1").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber2").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber3").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber4").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber5").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber6").classList.add("animate-snap-slideNumber");
  	document.getElementById("animateSlideNumber7").classList.add("animate-snap-slideNumber");

  	document.getElementById("animateFooter").classList.add("animate-snap-footer");
  	document.getElementById("animateFooterContact").classList.add("animate-snap-footerContact");


  	isSnap = true;
  }

};








// call looping function on page load

$(function(){

});

