		function init(){
			var checkstatus = document.getElementById('data').getAttribute("class");
			document.getElementById('off').setAttribute("disabled", "disabled");
			document.getElementById('data').setAttribute('placeholder','"ON" TO START');

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
			document.getElementById('data').setAttribute("placeholder","0");
			document.getElementById('on').setAttribute("disabled", "disabled");
			document.getElementById('off').removeAttribute("disabled");
			var els = document.querySelectorAll('.button');
				for (var i=0; i < els.length; i++) {
				    els[i].removeAttribute("disabled");
				}
		}

		//disable all input
		function off(){
			document.getElementById('data').setAttribute("placeholder","Switched OFF");
			document.getElementById('off').setAttribute("disabled", "disabled");
			document.getElementById('on').removeAttribute("disabled");
			var els = document.querySelectorAll('.button');
				for (var i=0; i < els.length; i++) {
				    els[i].setAttribute("disabled", "disabled");
				}
		}

		//Clear all the data
		function allclear(){
			document.getElementById('data').value = "";
			document.getElementById('data').setAttribute("placeholder","0");
		}

		//clear last input
		function backSpace(){
			var theInput = document.getElementById('data');
			theInput.value = theInput.value.slice(0, theInput.value.length -1);
		}

		function dot(){
			document.getElementById('data').value +=".";
		}
		function one(){
			document.getElementById('data').value +=1;
		}
		function two(){
			document.getElementById('data').value +=2;
		}
		function three(){
			document.getElementById('data').value +=3;
		}
		function four(){
			document.getElementById('data').value +=4;
		}
		function five(){
			document.getElementById('data').value +=5;
		}
		function six(){
			document.getElementById('data').value +=6;
		}
		function seven(){
			document.getElementById('data').value +=7;
		}
		function eight(){
			document.getElementById('data').value +=8;
		}
		function nine(){
			document.getElementById('data').value +=9;
		}
		function zero(){
			document.getElementById('data').value +=0;
		}
		function add(){
			document.getElementById('data').value +="+";
		}
		function sub(){
			document.getElementById('data').value +="-";
		}
		function mul(){
			document.getElementById('data').value +="*";
		}
		function dev(){
			document.getElementById('data').value +="/";
		}
		function equal(){
			document.getElementById('data').value = eval(document.getElementById('data').value);
		}