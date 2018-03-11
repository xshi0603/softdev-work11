var c = document.getElementById("svgg");
var cbutton = document.getElementById("cbutton");
var xVel = 4;
var yVel = 6;
var radius = 10;
var elements = [];
var id;


var createCircle = function (e) {
    clearInterval(id);
    id = setInterval(animate, 10);
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", radius);
    c1.setAttribute("xvel", xVel);
    c1.setAttribute("yvel", yVel);
    c1.setAttribute("fill", "green");
    c.append(c1);
    elements.push(c1);

};


var animate = function(e) {
    var i;
    for (i = 0; i < elements.length; i++) {

	var currEle = elements[i];
	var currX = Number(currEle.getAttribute("cx"));
	var currY = Number(currEle.getAttribute("cy"));
	var currXVel = Number(currEle.getAttribute("xvel"));
	var currYVel = Number(currEle.getAttribute("yvel"));

	if (currX + radius >= 500 || currX <= 0) {
	    currXVel *= -1;
	}
	else if (currY + radius >= 500 || currY <= 0) {
	    currYVel *= -1;
	}

	currX += currXVel;
	currY += currYVel;
	
	currEle.setAttribute("cx", currX);
	currEle.setAttribute("cy", currY);
	currEle.setAttribute("xvel", currXVel);
	currEle.setAttribute("yvel", currYVel);


    }

    console.log("hello");

};


var stop = function() {
    while (c.firstChild) {
	c.removeChild(c.firstChild);
    }
    clearInterval(id);
    elements = [];
};


//----------------EVENT LISTENERS--------------------

c.addEventListener('click', createCircle);

cbutton.addEventListener('click', stop);