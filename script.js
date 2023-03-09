"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'black') {
		document.body.style.color = 'hotpink';
	} else {
		document.body.style.color = 'black';
	}
}