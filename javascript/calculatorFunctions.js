
function keyPress (key) {
			if (key == '=') {
				let eq = document.getElementById("current").value;
				document.getElementById("current").value = '0';
				document.getElementById("results").innerHTML = eval(eq); 
			} else if (key == 'C') {
				document.getElementById("current").value = '0';
				document.getElementById("results").innerHTML = '...'; 
			} else if (key == 'CE') {
				if (document.getElementById("current").value != '0')
					document.getElementById("current").value = document.getElementById("current").value.substring(0, document.getElementById("current").value.length - 1);
			} else {
				if (key == '+' || key == '-' || key == '*' || key == '/')
				{
					if (document.getElementById("current").value == '0' && document.getElementById("results").innerHTML != '...')
						document.getElementById("current").value = document.getElementById("results").innerHTML;
				}
				if (document.getElementById("current").value == '0' && key != '.')
					document.getElementById("current").value = '';
				document.getElementById("current").value += key;

			}
}

