var header = document.querySelector("header"),
	time = 5,
	num = 300,
	size = 4,
	space = 18,
	color = "#a4a5a6";

motionDot(header, num, time, size, space, color);


function motionDot(parent, number, time, size, space, color){
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d"),
		time = 5,
		position = [100, 100],
		mouseX = 999,
		mouseY = 999;

	parent.appendChild(canvas);
	canvas.width  = parent.offsetWidth;
	canvas.height = parent.offsetHeight;
	canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    // canvas.style.zIndex = "-1";
	// console.log(canvas);
	this.init = function(){
		if(canvas){

			_draw_circle();
			// requestAnimationFrame(_draw_circle());
			// canvas.addEventListener("mousedown", function(event){
			// 	_click_dot(event);
			// });
    		canvas.addEventListener('mousemove', function(event){
    			_click_dot(event)
    		});
		};

	}
/*-------------------------------------------*/
/*  Private Function                         */
/*-------------------------------------------*/
	_draw_circle = function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(i = 1; i <= number; i++){
			ctx.beginPath();
			// arc(x, y, radius, startAngle, endAngle, anticlockwise);
			ctx.arc(_randomX(), _randomY(), size, 0, Math.PI*2, false);
			ctx.fillStyle = color;
	        // if(ctx.isPointInPath(mouseX,mouseY)){
	        //     ctx.fillStyle = 'red';
	        // }
			ctx.fill();
		};
		// requestAnimationFrame(_draw_circle());
	};

	_randomX = function(){
		var min,
			max,
			num,
			indent,
			arr;
		num = space;
		min = num;
		max = canvas.width - num;
		indent = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
		return indent;
	};
	this.random_new = function(){
		var x = _randomX(),
			y = _randomY(),
			elements = parent.children[0].children,
			t,b,l,r;

		for(i = 0; i < elements.length; i++){
			t = Math.floor(elements[i].getBoundingClientRect().top);
			b = Math.floor(elements[i].getBoundingClientRect().bottom);
			l = Math.floor(elements[i].getBoundingClientRect().left);
			r = Math.floor(elements[i].getBoundingClientRect().right);
			if((x >= l)&&(x <= r)&&(y >= t)&&(y <= b)){
				// x = _randomX();
				// y = _randomY();
				return random_new();
			}else{
				// console.log(x + "-" + y);
				// return [x, y]
			}
		};
		return [x,y];
		console.log(x + "-" + y + " - coor - " + t +" "+ b +" "+ l +" "+ r);

	};

	_randomY = function(){
		var min,
			max,
			num,
			indent;
		num = space;
		min = num;
		max = canvas.height - num;
		indent = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
		return indent;
	};

	this.round_elementsX = function(){
		var elements = parent.children[0].children,
			arr = {},
			a = 0; 
		for(i = 0; i < elements.length; i++){
			arr[i] = [ Math.floor(elements[i].getBoundingClientRect().top), Math.floor(elements[i].getBoundingClientRect().bottom)]
		};
		return arr;
	};

	this.round_elementsY = function(){
		var elements = parent.children[0].children,
			arr = {},
			a = 0; 
		for(i = 0; i < elements.length; i++){
			arr[i] = [ Math.floor(elements[i].getBoundingClientRect().left), Math.floor(elements[i].getBoundingClientRect().right)]
		};
		return arr;
	};

/*-------------------------------------------*/
/*  Hover dot                                */
/*-------------------------------------------*/
	_findOffset = function(obj) {
	    var curX = curY = 0;
	    if (obj.offsetParent) {
	        do {
	            curX += obj.offsetLeft;
	            curY += obj.offsetTop;
	        } while (obj = obj.offsetParent);
	    return {x:curX,y:curY};
	    }
	};
	_updateCanvas = function(e){
	    var pos = _findOffset(canvas);
	    
	    mouseX = e.pageX - pos.x;
	    mouseY = e.pageY - pos.y;
	    
	    // ctx.clearRect(0,0,canvas.width,canvas.height);
	    // drawCanvas();
	    // _draw_circle();
	}

	_click_dot = function(event){
		var x = event.pageX - canvas.offsetLeft,
			y = event.pageY - canvas.offsetTop;
	    // var pos = _findOffset(canvas);
	    
	    // mouseX = event.pageX - pos.x;
	    // mouseY = event.pageY - pos.y;
	    // mouseX = event.pageX - canvas.offsetLeft;
	    // mouseY = event.pageY - canvas.offsetTop;
		// ctx.isPointInPath(x, y);
		console.log(ctx.isPointInPath(x, y))
		console.log(x +"fuck"+ y)
	}

/*-------------------------------------------*/
/*  Line                                     */
/*-------------------------------------------*/
	_draw_line_vertical = function(el, indent, bottom){
		// vertical
		el.beginPath();
		el.moveTo(indent, 0);
		el.lineTo(indent, bottom);
		el.lineWidth = 1;
		el.stroke();
	};

	_draw_line_horizontal = function(el, indent, right){
		// horizontal
		el.beginPath();
		el.moveTo(0, indent);
		el.lineTo(right, indent);
		el.lineWidth = 1;
		el.stroke();
	};

/*-------------------------------------------*/
/*  Load                                     */
/*-------------------------------------------*/
	this.init();
}