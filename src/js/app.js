var header = document.querySelector("header"),
	time = 5,
	num = 10,
	size = 1,
	space = 18,
	color = "#a4a5a6";

motionDot(header, num, time, size, space, color);


function motionDot(parent, number, time, size, space, color){
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d"),
		time = 5,
		position = [100, 100];

	parent.appendChild(canvas);
	canvas.width  = parent.offsetWidth;
	canvas.height = parent.offsetHeight;
	canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.zIndex = "-1";
	// console.log(canvas);
	this.init = function(){
		if(canvas){
			var a = canvas.width / space,
				b = canvas.height / space;
			// console.log(a);
			// console.log(b);
			// for(i=1; i <= a; i++){
			// 	_draw_line_vertical(ctx, (space * i), canvas.height);
			// }
			// for(i=1; i <= Math.floor(b); i++){
			// 	_draw_line_horizontal(ctx, (space * i), canvas.width);
			// }
			for(i = 1; i <= number; i++){
				_draw_circle(ctx, size, color, [_randomX(), _randomY()])
				// _draw_circle(ctx, size, color, random_new())
				// _random_new();
			}
			// _round_elementsX();
		};

	}
/*-------------------------------------------*/
/*  Private Function                         */
/*-------------------------------------------*/
	_draw_circle = function(el, size, color, position){
		el.beginPath();
		// arc(x, y, radius, startAngle, endAngle, anticlockwise);
		el.arc(position[0], position[1], size, 0, Math.PI*2, false);
		el.fillStyle = color;
		el.fill();
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
	_hover_dot = function(){

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