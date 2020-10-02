		
		var display = document.getElementById('data');
		var start = document.getElementById('on');
		var stop =document.getElementById('off'); 



		function init(){
			var checkstatus = display.getAttribute("class");
			stop.setAttribute("disabled", "disabled");
			display.setAttribute('placeholder','"ON" TO START');

			if (checkstatus !== "on") {
				var els = document.querySelectorAll('.button');
				for (var i=0; i < els.length; i++) {
				    els[i].setAttribute("disabled", "disabled");
				}
			}
		}
		init();

		//Enable all input
		function on(){
			display.setAttribute("placeholder","0");
			start.setAttribute("disabled", "disabled");
			stop.removeAttribute("disabled");
			var els = document.querySelectorAll('.button');
				for (var i=0; i < els.length; i++) {
				    els[i].removeAttribute("disabled");
				}
		}

		//disable all input
		function off(){
			display.value="";
			display.setAttribute("placeholder","Switched OFF");
			stop.setAttribute("disabled", "disabled");
			start.removeAttribute("disabled");
			var els = document.querySelectorAll('.button');
				for (var i=0; i < els.length; i++) {
				    els[i].setAttribute("disabled", "disabled");
				}
		}

		//Clear all the data
		function allclear(){
			display.value = "";
			display.setAttribute("placeholder","0");
		}

		//clear last input
		function backSpace(){
			var theInput = display;
			theInput.value = theInput.value.slice(0, theInput.value.length -1);
		}

		function dot(){
			display.value +=".";
		}
		function one(){
			display.value +=1;
		}
		function two(){
			display.value +=2;
		}
		function three(){
			display.value +=3;
		}
		function four(){
			display.value +=4;
		}
		function five(){
			display.value +=5;
		}
		function six(){
			display.value +=6;
		}
		function seven(){
			display.value +=7;
		}
		function eight(){
			display.value +=8;
		}
		function nine(){
			display.value +=9;
		}
		function zero(){
			display.value +=0;
		}
		function add(){
			display.value +="+";
		}
		function sub(){
			display.value +="-";
		}
		function mul(){
			display.value +="*";
		}
		function dev(){
			display.value +="/";
		}
		function equal(){
			display.value = eval(display.value);
		}