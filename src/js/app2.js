var header = document.querySelector("header"),
	time = 3000,
	num = 300,
	size = 2,
	size2 = size *2,
	space = 18,
	color = "#a4a5a6",
	color2 = "#299cc4",
	spread = 25;

motionDot(header, num, time, size, size2, space, spread, color, color2);


function motionDot(parent, number, time, size, size2, space, spread, color, color2){
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d"),
		arr = {},
		arx = {},
		j = 1,
		v = 0.1,
		raf,
		flag = false,
		mX = 0,
		mY = 0,
		color_o = "rgba(164, 165, 166, 0.5)"

	parent.appendChild(canvas);
	canvas.width  = parent.offsetWidth;
	canvas.height = parent.offsetHeight;
	canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";

	this.init = function(){
		// setInterval( console.log("fuck"), 5000);
		_draw(true);
		var timerId = setInterval(function(){
		  _draw(true, null, null, null, true);
		}, time);
		// requestAnimationFrame(_draw(true));
		canvas.addEventListener("mousedown", function(event){
			_click_dot(event, true);
			// _move_line(true, event);
			flag = true
		});
		canvas.addEventListener("mouseup", function(event){
			_click_dot(event, false);
			// _move_line(false, event)
			flag = false
		});
		canvas.addEventListener("mousemove", function(event){
			// event.preventDefault();
			_move_line(event);
		});
	}
/*-------------------------------------------*/
/*  Private Function                         */
/*-------------------------------------------*/
	_dot = function(x, y, r, c){
	    ctx.beginPath();
	    ctx.arc(x, y, r, 0, Math.PI*2, true);
	    ctx.fillStyle = c;
	    ctx.closePath();
	    ctx.fill();
	};

	_line = function(x, y, tx, ty){
		// ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(tx, ty);
		// el.lineWidth = 1;
		// ctx.fill();
	};

	_click_dot = function(event, bool, move, a, b){
		var x = event.pageX - canvas.offsetLeft,
			y = event.pageY - canvas.offsetTop;
		event.preventDefault();
		if(!move){
			_draw(false, x, y, bool);
		}else{
			_draw(false, a, b, bool);
		}
	};

	_move_line = function(event){
		if(flag == true){
			var x = event.pageX - canvas.offsetLeft,
				y = event.pageY - canvas.offsetTop;
			// mX = event.pageX - canvas.offsetLeft,
			// mY = event.pageY - canvas.offsetTop;
			event.preventDefault();
			// console.log([mX, mY]);
			// console.log("fuck");
			// _click_dot(event, true, true, mX, mY)
			_click_dot(event, true, true, x, y)
		}else{
			return false
		}
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


	_draw = function(bool, mx, my, drop, out){
		if(bool == true){
			if(!out){
				ctx.clearRect(0,0, canvas.width, canvas.height);
				for(i=1; i <= number; i++){
					var x = _randomX();
					var y = _randomY();
					// var x = round_elementsX();
					// var y = _randomY();
					// var x = random_new()[0];
					// var y = random_new()[1];
				    arr[i] = [x , y];
				    _dot(x, y, size, color);
				    // ctx.beginPath();
				    // ctx.arc(x, y, size, 0, Math.PI*2, true);
				    // ctx.closePath();
				    // ctx.fillStyle = color;
		    		// ctx.fill();
		    		// console.log(random_new());
				};
			}else{
				// var a = Math.floor(Math.random()*300);
				// var x = arr[a][0];
				// var y = arr[a][1];
				// console.log(a);
				// setTimeout(function(){
				// 	// arr[a]
				// 	// q = 1;
				// 	setInterval(function(){
				// 	    // ctx.beginPath();
				// 	    // ctx.arc(x, y, size, 0, Math.PI*2, true);
				// 	    // ctx.fillStyle = "rgba(164, 165, 166, " + q + ")";
				//     	_dot(x, y, size, "rgba(164, 165, 166, " + j + ")");
				// 	    j = j - 0.05;
				// 		console.log(j);
				// 	}, 500);
				// 	j = 1;
				// 	arr[a][_randomX(), _randomY()]
				// 	_dot(arr[a][0], arr[a][1], size, "red");
				// }, 1000);
				// ctx.clearRect(0,0, canvas.width, canvas.height);
				// setInterval(function(){
				//     // ctx.beginPath();
				//     // ctx.arc(x, y, size, 0, Math.PI*2, true);
				//     // ctx.fillStyle = "rgba(164, 165, 166, " + q + ")";
			 //    	_dot(x, y, size, "rgba(164, 165, 166, " + j + ")");
				//     j = j - 0.05;
				// 	console.log(j);
				// }, 500);
				// j = 1;
				// arr[a][_randomX(), _randomY()]
				// _dot(arr[a][0], arr[a][1], size, "red");
				// var timerId = setInterval(function() {
				//   	// console.log("fuck")
				//   	// g = 30
				// 	for(i=1; i <= 30; i++){
				// 		var g = Math.floor(Math.random()*300);
				// 		var w = arr[g][0];
				// 		var e = arr[g][1];
				// 		// if( i == a){
				// 		    // arr[i] = [_randomX(), _randomY()];
				// 		    // _dot(_randomX(), _randomY(), size, color);
				// 	    _dot(w, e, size, "rgba(164, 165, 166, " + j + ")");
				// 		    // _dot(arr[i][0], arr[i][1], size, "rgba(164, 165, 166, " + j + ")");
				// 		// }
				// 	    // arr[i] = [w , e];
				// 	    // _dot(w, e, size, color);
				// 	};
				//     j = j - 1;
				// }, 500);

				// // через 2 сек остановить повторы
				// setTimeout(function() {
				//   	clearInterval(timerId);
				//   // alert( 'стоп' );
				// 	for(i=1; i <= number; i++){
				// 		var w = arr[i][0];
				// 		var e = arr[i][1];
				// 		if( i == a){
				// 		    arr[i] = [_randomX(), _randomY()];
				// 		    _dot(_randomX(), _randomY(), size, "red");
				// 		}
				// 	    arr[i] = [w , e];
				// 	    _dot(w, e, size, color);
				// 	};
				// 	j = 1
				// }, 2000);

				// for(i=1; i <= number; i++){
				// 	var w = arr[i][0];
				// 	var e = arr[i][1];
				// 	if( i == a){
				// 	    arr[i] = [_randomX(), _randomY()];
				// 	    _dot(arr[i][0], arr[i][1], size, color);
				// 	}
				//     arr[i] = [w , e];
				//     _dot(w, e, size, color);
				// };
			}
		}else{
			ctx.clearRect(0,0, canvas.width, canvas.height);
			for(i=1; i <= number; i++){
				var x = arr[i][0];
				var y = arr[i][1];
			    ctx.beginPath();
			    ctx.arc(x, y, size, 0, Math.PI*2, true);
			    ctx.fillStyle = color;
			    if(drop == true){
				    if((x >= mx-25 && x <= mx+25)&&(y >= my-25 && y <= my+25)){
					    ctx.arc(x, y, size2, 0, Math.PI*2, true);
						ctx.moveTo(x, y);
						ctx.lineTo(mx, my);
						ctx.lineWidth = 1;
					    ctx.fillStyle = color2;
					    ctx.strokeStyle = color2;
						ctx.stroke();
				    }else{
					    ctx.arc(x, y, size, 0, Math.PI*2, true);
					    ctx.fillStyle = color;
				    };
				}else{
				    ctx.arc(x, y, size, 0, Math.PI*2, true);
				    ctx.fillStyle = color;
				}
			    ctx.closePath();
	    		ctx.fill();
			};
		}
	};

	this.random_new = function(x, y){
		var x = _randomX(),
			y = _randomY(),
			elements = parent.children[0].children,
			t,b,l,r,
			n_arrx = [],
			n_arry = []; 

		for(i = 0; i < elements.length; i++){
		   // t = Math.floor(elements[i].getBoundingClientRect().top);
		   // b = Math.floor(elements[i].getBoundingClientRect().bottom);
		   // l = Math.floor(elements[i].getBoundingClientRect().left);
		   // r = Math.floor(elements[i].getBoundingClientRect().right);
		   t = Math.floor(elements[i].offsetTop);
		   b = Math.floor(elements[i].offsetTop + elements[i].offsetHeight);
		   l = Math.floor(elements[i].offsetLeft);
		   r = Math.floor(elements[i].offsetLeft + elements[i].offsetWidth);
		   // return [t, b, l, r]
		   console.log(l +"-"+r+"-"+t+"-"+b);
		   if((Math.abs(x) >= (Math.abs(l) - Math.abs(space)))&&
		   (x <= (Math.abs(r) + Math.abs(space)))&&
		   (Math.abs(y) >= (Math.abs(t) - Math.abs(space)))&&
		   (Math.abs(y) <= (Math.abs(b) + Math.abs(space))))
		   {
		       return [x, y+(b-t)];
		   };
		   n_arrx.push(x);
		   n_arry.push(y);
		   console.log(n_arrx, n_arry)
		};
		   return [x,y];
	};

	this.round_elementsX = function(){
		var elements = parent.children[0].children,
			round = {},
			a = 0,
			b = 0,
			num = _randomX(),
			flig = false,
			n_arr = [];  
		for(i = 0; i < elements.length; i++){
			a = Math.floor(elements[i].getBoundingClientRect().top);
			b = Math.floor(elements[i].getBoundingClientRect().bottom);
			round[i] = [ a, b];
			if( num >= a && num <= b ){
				flig = true
				// return round_elementsX()
			}else{
				flig = false;
				n_arr.push(num)
			}
		};
		// return round;
		if(flig == false){
			// console.log(num + "___" + n_arr + "+ __ +"+ round)
			// console.log(round);
			return num;
		}else{
			return round_elementsX()
		}
	};

	this.round_elementsY = function(){
		var elements = parent.children[0].children,
			round = {},
			a = 0,
			b = 0; 
		for(i = 0; i < elements.length; i++){
			a = Math.floor(elements[i].getBoundingClientRect().left);
			b = Math.floor(elements[i].getBoundingClientRect().right);
			round[i] = [ a, b]
		};
		return round;
	};
/*-------------------------------------------*/
/*  Load                                     */
/*-------------------------------------------*/
	this.init();
}