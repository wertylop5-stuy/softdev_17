var box = document.getElementById("box");
var body = document.getElementsByTagName("body")[0];
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

var recalc = function(e) {
	console.log("recalc");
	boxHeight = box.offsetHeight;
	boxWidth = box.offsetWidth;
	targetX = boxWidth / 2;
	targetY = boxHeight / 2;
};

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
	return Math.sqrt(((x0-x1)**2) + ((y0-y1)**2));
};

var maxDist = distance(boxHeight, boxWidth, 0, 0);

var findIt = function(e) {
	var scale = 255 - 
		(255 * 
		(distance(targetX, targetY, e.clientX, e.clientY)/maxDist));
	
	box.style.backgroundColor = "rgb(" + scale + ", " + scale + ", " + scale+ ")";
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
window.addEventListener("resize", recalc);

