$(document).ready(function() {
	$('button')
		.click(
			function() {
				for (var i = 1; i <= 100; i++) {
					if (i % 15 === 0) {
						document.write('FizzBuzz');
						document.write('<br></br>');
						}
					else if (i % 3 === 0) {
						document.write('Fizz');
						document.write('<br></br>');
						}
					else if (i % 5 === 0) {
						document.write('Buzz');
						document.write('<br></br>');
						}
					else {
						document.write(i);
						document.write('<br></br>');
						}
				}
		})
});
