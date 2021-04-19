// declare vars

var bioFromTop;
var workFromTop;
var passionFromTop;
var playFromTop;
var caseStudiesFromTop;
var contactFromTop;

var currentScroll;
var correctScroll;


$(window).resize(updateVariables);

function updateVariables() {
  bioFromTop = $("#bio").offset().top;
  workFromTop = $("#work").offset().top;
  passionFromTop = $("#passion").offset().top;
  playFromTop = $("#play").offset().top;
  caseStudiesFromTop = $("#case-studies").offset().top;
  contactFromTop = $("#contact").offset().top;

  console.log("Bio is " + bioFromTop);
  console.log("Work is " + workFromTop);
  console.log("Passion is " + passionFromTop);
  console.log("Play is " + playFromTop);
  console.log("Case Studies is " + caseStudiesFromTop);
  console.log("Contact is " + contactFromTop);

};

function updateCurrentScroll(){
  currentScroll = $(window).scrollTop();
  console.log ("Current Scroll is " + currentScroll);
}


function nextSlide() {
  updateVariables();
  updateCurrentScroll();

  if(currentScroll >= contactFromTop){
    console.log("can't go further");
    return null;
  } else if(currentScroll >= caseStudiesFromTop){
    console.log("--> CONTACT");
    document.getElementById("contact").scrollIntoView();
  } else if(currentScroll >= playFromTop){
    console.log("--> CASE STUDIES");
    document.getElementById("case-studies").scrollIntoView();  
  } else if(currentScroll >= passionFromTop){
    console.log("--> PLAY");
    document.getElementById("play").scrollIntoView();
  } else if(currentScroll >= workFromTop){
    console.log("--> PASSION");
    document.getElementById("passion").scrollIntoView();
  } else{
    console.log("--> WORK"); 
    document.getElementById("work").scrollIntoView();
  }

} // end of function




function previousSlide() {
  updateVariables();
  updateCurrentScroll();

  if(currentScroll >= contactFromTop){
    console.log("--> CASE STUDIES");
    document.getElementById("case-studies").scrollIntoView();  
  } else if(currentScroll >= caseStudiesFromTop){
    console.log("--> PLAY");
    document.getElementById("play").scrollIntoView();
  } else if(currentScroll >= playFromTop){
    console.log("--> PASSION");
    document.getElementById("passion").scrollIntoView();
  } else if(currentScroll >= passionFromTop){
    console.log("--> WORK"); 
    document.getElementById("work").scrollIntoView();
  } else if(currentScroll >= workFromTop){
    console.log("--> BIO"); 
    document.getElementById("bio").scrollIntoView();
  } else{
    console.log("--> BIO STILL"); 
    return null;
  }

} // end of function

$(window).scroll(activateDeactivate);

function activateDeactivate() {
  console.log("scrolling");
  updateVariables();
  updateCurrentScroll();

  if(currentScroll >= contactFromTop){
    console.log("no next");
    $("#next-arrow").attr("src","img/arrow-next-disabled.svg");
  } else if(currentScroll >= bioFromTop+10){
    console.log("all active");
    $("#next-arrow").attr("src","img/arrow-next-active.svg");
    $("#prev-arrow").attr("src","img/arrow-prev-active.svg");
  } else{
    console.log("no previous");
    $("#prev-arrow").attr("src","img/arrow-hidden.svg");
    $("#next-arrow").attr("src","img/arrow-hidden.svg");
  }
}

updateVariables();
updateCurrentScroll();


function showEmoji_1() {
  console.log("it worked!");
  document.getElementById("emoji-2").style.display = "none";
  document.getElementById("emoji-3").style.display = "none";
  document.getElementById("emoji-1").style.display = "inline-block";

}

function showEmoji_2() {
  document.getElementById("emoji-1").style.display = "none";
  document.getElementById("emoji-3").style.display = "none";
  document.getElementById("emoji-2").style.display = "inline-block";
}

function showEmoji_3() {
  document.getElementById("emoji-1").style.display = "none";
  document.getElementById("emoji-2").style.display = "none";
  document.getElementById("emoji-3").style.display = "inline-block";
}

// call looping function on page load

$(function(){

});

