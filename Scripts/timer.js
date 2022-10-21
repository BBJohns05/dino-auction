// The date we're counting down to
var count = new Date('Dec 12, 2022 15:37:25').getTime();

// Updates the count down every second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Calculates the duration between now and the specified date
	var distance = count - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById(
		'timer'
	).innerHTML = `${days} days, ${hours} hours, and ${minutes} minutes `;

	// If the count down is finished, replace the time with an alert
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('timer').innerHTML = 'Sold!';
	}
}, 1000);
