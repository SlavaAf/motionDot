var header = document.querySelector("header"),
	time = 4000,
	num = 300,
	size = 1,
	size2 = size *2,
	space = 18,
	// color = "red",
	color = "rgba(164, 165, 166, 1)",
	// color = "#a4a5a6",
	color2 = "#299cc4",
	spread = 25;

motionDot(header, num, time, size, size2, space, spread, color, color2);


function motionDot(parent, number, time, size, size2, space, spread, color, color2){
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d"),
		arr = {},
		opacity = 1,
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
		_draw();
		// for(var j=1; j <= number; j++){
		// 	var x = random_new()[0];
		// 	var y = random_new()[1];
		// 	console.log(x + " - " + y);
		// 	console.log(j);
		// };
		var timerId = setInterval(function(){
		  // _draw(true, null, null, null, true);
		  // console.log("1");
			// _draw();
			_draw(true);
		}, time);
		canvas.addEventListener("mousedown", function(event){
			// _click_dot(event, true);
			// _move_line(true, event);
			// flag = true
		});
		canvas.addEventListener("mouseup", function(event){
			// _click_dot(event, false);
			// _move_line(false, event)
			// flag = false
		});
		canvas.addEventListener("mousemove", function(event){
			// event.preventDefault();
			// _move_line(event);
		});
	};
/*-------------------------------------------*/
/*  Private Function                         */
/*-------------------------------------------*/
	_dot = function(x, y, r, c, o, f){
	    ctx.beginPath();
	    // if( f == 1){
		   //  if(o < 1){
		   //  	o += 0.1;
		   //  }else{
		   //  	o -= 0.1;
		   //  }
	    // 	console.log(o);
	    // 	console.log("qqq")
	    // }else{
	    // 	console.log("www")
	    // }
		// ctx.globalAlpha = 0.5;
		ctx.globalAlpha = o;
	    ctx.arc(x, y, r, 0, Math.PI*2, true);
	    ctx.fillStyle = c;
	    ctx.closePath();
	    ctx.fill();
	};

	_line = function(x, y, tx, ty){
		ctx.moveTo(x, y);
		ctx.lineTo(tx, ty);
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
			event.preventDefault();
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
		if(!bool){
			ctx.clearRect(0,0, canvas.width, canvas.height);
			for(var i=1; i <= number; i++){
				// var x = _randomX();
				// var y = _randomY();
				var x = random_new()[0];
				var y = random_new()[1];
				var f = Math.floor(Math.random()*2);
				var o = 1;
			    arr[i] = [x, y, f, o];
			    _dot(x, y, size, color, o);
			};
			// var a = parent.children[0].children[0].getBoundingClientRect().left - space;
			// var b = parent.children[0].children[0].getBoundingClientRect().right + space;
			// console.log("t - "+a+" + b "+b)
		    // console.log(arr);
		}else if(bool == true){
			ctx.clearRect(0,0, canvas.width, canvas.height);
			// for(i=1; i <= number; i++){
			// 	var x = arr[i][0];
			// 	var y = arr[i][1];
			// 	var f = arr[i][2];
			// 	var o = arr[i][3];
			// 	_fade(x, y, f, o)
			// };
			// var s = 30;
			for(i=1; i < number; i++){
				var a = Math.floor(Math.random()*2);
				// console.log(a);
				var x = arr[i][0];
				var y = arr[i][1];
				var f = arr[i][2];
				var o = arr[i][3];
				if( a == 1){
					_fade(x, y, f, o, i)
				}else{
			    	_dot(x, y, size, color, o);
				}
			};
		}else{
			// ctx.clearRect(0,0, canvas.width, canvas.height);
			// for(i=1; i <= number; i++){
			// 	var x = arr[i][0];
			// 	var y = arr[i][1];
			//     ctx.beginPath();
			//     ctx.arc(x, y, size, 0, Math.PI*2, true);
			//     ctx.fillStyle = color;
			//     if(drop == true){
			// 	    if((x >= mx-25 && x <= mx+25)&&(y >= my-25 && y <= my+25)){
			// 		    ctx.arc(x, y, size2, 0, Math.PI*2, true);
			// 			ctx.moveTo(x, y);
			// 			ctx.lineTo(mx, my);
			// 			ctx.lineWidth = 1;
			// 		    ctx.fillStyle = color2;
			// 		    ctx.strokeStyle = color2;
			// 			ctx.stroke();
			// 	    }else{
			// 		    ctx.arc(x, y, size, 0, Math.PI*2, true);
			// 		    ctx.fillStyle = color;
			// 	    };
			// 	}else{
			// 	    ctx.arc(x, y, size, 0, Math.PI*2, true);
			// 	    ctx.fillStyle = color;
			// 	}
			//     ctx.closePath();
	  //   		ctx.fill();
			// };
		} 
	};
	_fade = function(x, y, f, o, i){
		// var qr = 1/(settime / settimer);
		var qr = 0.05; 
		var settime = 3000;
		var settimer = 200;
		// if(f == 1){
		// 	o += qr;
		// 	if(o >= 1){
		// 		o = 1;
		// 		f = 0;
		// 		Math.floor(o);
		// 		arr[i] = [x, y, f, o];
		// 	}
		// 	Math.floor(o);
  //   		_dot(x, y, size, color, o);
  //   		// _dot(x, y, size,  "rgba(164, 165, 166, " + o + ")");
		// 	arr[i] = [x, y, f, o];
		// }else{
		// 	o -= qr;
		// 	if(o <= 0){
		// 		o = 0;
		// 		f = 1;
		// 		Math.floor(o);
		// 		var x = _randomX();
		// 		var y = _randomY();
		// 		arr[i] = [x, y, f, o];
		// 	}
		// 	Math.floor(o);
  //   		_dot(x, y, size, color, o);
  //   		// _dot(x, y, size,  "rgba(164, 165, 166, " + o + ")");
		// 	arr[i] = [x, y, f, o];
		// }
		if(o == 1){
			var timerId = setInterval(function(){
				o -= qr;
				Math.floor(o);
	    		_dot(x, y, size, color, o);
	    		// _dot(x, y, size,  "rgba(164, 165, 166, " + o + ")");
				arr[i] = [x, y, f, o];
			}, settimer);
			setTimeout(function(){
				clearInterval(timerId);
				o = 0;
				f = 1;
				// Math.floor(o);
				// var x = _randomX();
				// var y = _randomY();
				var x = random_new()[0];
				var y = random_new()[1];
				arr[i] = [x, y, f, o];
			}, settime); 
		// }else{
		}if(o == 0){
			var timerId = setInterval(function(){
				o += qr;
				// Math.floor(o);
	    		_dot(x, y, size, color, o);
	    		// _dot(x, y, size,  "rgba(164, 165, 166, " + o + ")");
				arr[i] = [x, y, f, o];
			}, settimer);
			setTimeout(function(){
				clearInterval(timerId);
				o = 1;
				f = 0;
				Math.floor(o);
				arr[i] = [x, y, f, o];
			}, settime);
		}
	}
/*-------------------------------------------*/
/*  Public Function                          */
/*-------------------------------------------*/
	this.random_new = function(){
		var x = _randomX(),
			y = _randomY(),
			elements = parent.children[0].children,
			el = Math.floor(Math.random()*(elements.length)),
			// el = 0,
			last = elements.length - 1,
			t,b,l,r,
			n_arrx = [],
			n_arry = [],
			met = false; 
			// console.log(el);
		t = elements[el].getBoundingClientRect().top - space;
		b = elements[el].getBoundingClientRect().bottom;
		l = elements[el].getBoundingClientRect().left - space;
		r = elements[el].getBoundingClientRect().right + space; 
		if(y < t || y > b){
			// first
			if(el == 0){
				el += 1;

				var t2 = elements[el].getBoundingClientRect().top;
				if(y <= t){

					// met = true
					return [x, y]

				}else if((y >= b) && (y <= t2)){

					// met = true;
					return [x, y]

				}else{
					met = true;
				}
			}else 
			// last
			if(el == last){
				el -= 1;
				var b2 = elements[el].getBoundingClientRect().bottom;
				if(y > b){
					// met = true;
					return [x, y]
				}else if(y < t && y > b2){
					// met = true;
					return [x, y]
				}else{
					met = true;
				} 
			}else{
				// other
				var el1 = el + 1;
				var el2 = el - 1;
				// console.log(el1 + " - " + el2)
				var t3 = elements[el1].getBoundingClientRect().top - space;
				var b3 = elements[el2].getBoundingClientRect().bottom + space;
				if(y < t && y > b3){
					// met = true
					return [x, y]
				}else
				if(y > b && y < t3){
					// met = true
					return [x, y]
				}else{
				// other and x
					met = true
				}
				// if(x <= l || x >= r){
				// 	met = true
				// 	// return [x, y]
				// }else{
				// 	met = true
				// 	// return [x, y]
				// }
			}
		}else{
			// met = true
			if(x <= l || x >= r){
			// if(x < l){
				// met = true
				return [x, y]
			}else{
				met = true
			}
		}
		// if(y >= t && y <= b){
		// 	met = true
		// }else{
		// 	if(x >= l && x <=r){
		// 		met = true
		// 	}
		// }
		// console.log(t);
		// for(i = 0; i < elements.length; i++){
		// 	t =elements[i].getBoundingClientRect().top;
		// 	b = elements[i].getBoundingClientRect().bottom;
		// 	l = elements[i].getBoundingClientRect().left;
		// 	r = elements[i].getBoundingClientRect().right; 
			// console.log("left - "+l+", "+"right - "+r);
			// console.log("top - "+t+", "+"bottom - "+b);
			// if(x < l || x > r){
			// 	if(y < t || y > b){
			// 		// console.log(parent.offsetWidth + " - width");
			// 		// console.log(parent.offsetHeight + " - height");
			// 		// return [x, y]
			// 	}else{
			// 		met = true;
			// 		// return random_new()
			// 	}
			// }else{
			// 	met = true;
			// 	// return random_new()
			// }
			// if(x >= l && x <= r){
			// 	met = true;
			// }else{
			// 	if(y >= t && y <= b){
			// 		// console.log(parent.offsetWidth + " - width");
			// 		// console.log(parent.offsetHeight + " - height");
			// 		// return [x, y]
			// 		met = true;
			// 		// return random_new()
			// 	}
			// }
		// };
		if(met == false){
	    	return [x,y];
	    }else{
	    	return random_new()
	    }
	};
/*-------------------------------------------*/
/*  Load                                     */
/*-------------------------------------------*/
	this.init();
}