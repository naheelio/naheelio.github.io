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
        strings: ["When I ^50 pull up ^150 on a ^250 nigga ^400 tell that ^200 nigga ^125 back, ^350 back"
        + "<br>" + "^350 I'm too ^100 good ^200 with ^50 these ^100 words ^400 watch that nigga ^400 back^50track"
        + "<br>" + "^800 If ^50 I ^50 die, ^500 all ^50 I ^50 know ^50 is ^250 I'm a ^100 mothafuckin' ^350 legend"
        + "<br>" + "^550 It's ^50 too ^50 late ^250 for ^50 my ^50 city, ^400 I'm ^50 the ^50 youngest ^100 nigga ^200 reppin"
        + "<br>" + "^300 Oh ^50 my ^50 God, ^600 oh ^50 my ^50 God"
        + "<br>" + "^600 If I die, ^400 I'm ^50 a ^50 leg^50end"
        + "<br>" + "^700 Oh ^50 my ^50 God, ^600 oh ^50 my ^50 God"
        + "<br>" + "^600 If I die, ^400 I'm ^50 a ^50 leg^50end"
        + "<br>" + "^700 I'm up ^50 first, ^500 I'm on ^50 tour, ^500 got a ^50 girl, ^250 she from the ^50 South"
        + "<br>" + "^500 Used to ^50 work, ^300 used to ^50 dance ^50 in ^50 Texas, ^200 now she ^50 clean ^50 the ^50 house"
        + "<br>" + "^650 Everyday, ^600 I ^50 was ^100 strugglin' ^500 to ^50 learn ^50 what ^50 life's ^50 about"
        + "<br>" + "^600 On ^50 my ^50 way, ^200 money ^200 taught ^50 me ^50 Spanish, ^150 make it ^50 andale"
        + "<br>" + "^850 Way ^100 up north, packed ^50 in ^50 Honda ^100 cars"
        + "<br>" + "^500 They ^50 don't ^50 know ^100 who we ^50 are"
        + "<br>" + "^600 Fuck ^50 'em ^50 all, ^400 they ^50 only ^50 pussy ^100 niggas ^100 shootin' ^100 at the ^50 star"
        + "<br>" + "^600 Right ^50 or ^50 wrong, ^150 I'mma ^50 write my ^50 wrongs"
        + "<br>" + "^500 They ^50 can't ^50 live ^50 this ^50 long"
        + "<br>" + "^500 You ^50 don't ^50 know ^100 where ^50 you're ^50 gonna ^50 go"
        + "<br>" + "^600 I got this ^50 shit ^50 mapped out ^50 strong"
        + "<br>" + "^500 When I ^50 pull up ^150 on a ^250 nigga ^400 tell that ^200 nigga ^125 back, ^350 back"
        + "<br>" + "^350 I'm too ^100 good ^200 with ^50 these ^100 words ^400 watch that nigga ^400 back^50track"
        + "<br>" + "^800 All I know, ^200 if ^50 I ^50 die, ^500 I'm a ^100 mothafuckin' ^350 legend"
        + "<br>" + "^550 It's ^50 too ^50 late ^250 for ^50 my ^50 city, ^400 I'm ^50 the ^50 youngest ^100 nigga ^200 reppin"
        + "<br>" + "^300 Oh ^50 my ^50 God, ^600 oh ^50 my ^50 God"
        + "<br>" + "^600 If I die, ^400 I'm ^50 a ^50 leg^50end"
        + "<br>" + "^700 Oh ^50 my ^50 God, ^600 oh ^50 my ^50 God"
        + "<br>" + "^600 If I die, ^400 I'm ^50 a ^50 leg^50end"
        + "<br>" + "^400 I'm ^50 the ^50 one."],
        startDelay: 6000,
        typeSpeed: 5,
        backSpeed: 10,
    });

});

