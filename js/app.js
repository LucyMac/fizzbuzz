$(document).ready(function() {
	$('button')
		.click(
			function() {
				for (var i = 1; i <= 100; i++) {
					if (i % 15 === 0) {
    					var node = document.createElement("P");         
					    var textnode = document.createTextNode("FizzBuzz");
					    node.appendChild(textnode);
					    document.getElementById("numbers").appendChild(node);
						}
					else if (i % 3 === 0) {
						var node = document.createElement("P");         
					    var textnode = document.createTextNode("Fizz");
					    node.appendChild(textnode);
					    document.getElementById("numbers").appendChild(node);
						}
					else if (i % 5 === 0) {
						var node = document.createElement("P");         
					    var textnode = document.createTextNode("Buzz");
					    node.appendChild(textnode);
					    document.getElementById("numbers").appendChild(node);
						}
					else {
						var node = document.createElement("P");         
					    var textnode = document.createTextNode(i);
					    node.appendChild(textnode);
					    document.getElementById("numbers").appendChild(node);
						}
				}
		})
});
