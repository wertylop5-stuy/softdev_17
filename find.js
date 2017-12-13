var box = document.getElementById("box");
var body = document.getElementsByTagName("body")[0];
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

if (targetX+40 > boxWidth) targetX = boxWidth - 40;
if (targetY+40 > boxHeight) targetY = boxHeight - 40;


var targetDiv = document.createElement("div");
targetDiv.style.width = "50px";
targetDiv.style.height = "50px";
targetDiv.style.position = "absolute"
targetDiv.style.left = targetX+"px";
targetDiv.style.top = targetY+"px";
targetDiv.style.cursor = "pointer";

box.appendChild(targetDiv);

var recalc = function(e) {
	console.log("recalc");
	boxHeight = box.offsetHeight;
	boxWidth = box.offsetWidth;
	
	randomize();
};

var randomize = function() {
	targetX = Math.random() * boxWidth;
	targetY = Math.random() * boxHeight;
	
	if (targetX+40 > boxWidth) targetX = boxWidth - 40;
	if (targetY+40 > boxHeight) targetY = boxHeight - 40;

	targetDiv.style.left = targetX+"px";
	targetDiv.style.top = targetY+"px";
};

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
	return Math.sqrt(((x0-x1)**2) + ((y0-y1)**2));
};

var maxDist = distance(boxHeight, boxWidth, 0, 0);

var findIt = function(e) {
	var scale = 100 -
		(distance(targetX, targetY, e.clientX, e.clientY)/maxDist)*100;
	
	box.style.backgroundColor = "hsl(" + 130 + ", " + "43%" + ", " + scale+ "%)";
};

var found = function(e) {
	alert("Moo!");
	
	randomize();
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
targetDiv.addEventListener("click", found);
window.addEventListener("resize", recalc);

