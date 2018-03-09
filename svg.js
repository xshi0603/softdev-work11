var c = document.getElementById("svgg");
var cbutton = document.getElementById("cbutton");

var createCircle = function (x, y, r, color, svg) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", color);
	c1.addEventListener('click', changeGreen, true);
	return c1;

};

var createRandomCircle = function(e) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var r = 10;
	var x = Math.floor(Math.random() * (500-r));
	var y = Math.floor(Math.random() * (500-r));
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", "pink");
	c1.addEventListener('click', changeGreen, true);
	c.append( c1);

	c.removeChild(this);
	e.stopPropagation();
};

var changeGreen = function(e) {

    //console.log("changing colora");;
    this.setAttribute("fill", "green");
    this.removeEventListener('click', changeGreen, true);
    this.addEventListener('click', createRandomCircle, true);
    e.stopPropagation();
    
    
};

var newCirc = function(xcor, ycor, rad, color, element){
	var circ = {
		x: xcor,
		y: ycor,
		rad: rad,
		color: color,
		element: document.createElementNS("http://www.w3.org/2000/svg", element),

		display: function() {
		this.element.setAttribute("cx", this.x);
		this.element.setAttribute("cy", this.y);
		this.element.setAttribute("r", this.rad);
		this.element.setAttribute("fill", this.color);
		this.element.addEventListener("click", this.change);
		c.appendChild(this.element);
	    },
		change: function(e) {
		if (this.getAttribute("fill") == "blue" || this.getAttribute("fill") == "pink") {
		    this.setAttribute("fill", "green");
		}
		else {
		    this.remove(e);
		    var newC = newCirc(Math.random() * 500, Math.random() * 500, 10, "pink", "circle");
		    newC.display();
		}
		e.stopPropagation();
	    },
		remove: function() {
		svg.removeChild(this.element);
	    }
		
	};
	return circ;
};

//----------------EVENT LISTENERS---------------------
c.addEventListener('click', function(e) {


	var cir = newCirc(e.offsetX, e.offsetY, 10, "blue", "circle");
	cir.display();
	console.log(cir);

    });


cbutton.addEventListener('click', function() {
	
	while (c.firstChild) {
	    c.removeChild(c.firstChild);
	}	

    });
