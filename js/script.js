'use strict';

let imgs = document.getElementsByTagName('img');
for (let img of imgs) {
	img.setAttribute("draggable", "false");
}

let grade = document.getElementsByClassName('grade');

let x1;

let x2;

for (let i of grade) {
	i.addEventListener("touchstart", function (e) {
		e.preventDefault();
		e.stopPropagation();

		x1 = e.clientX;
	});

	i.addEventListener("touchmove", function (e) {
		e.preventDefault();
		e.stopPropagation();
		x2 = e.clientX;
		let x3 = x2 - x1;
		ID_test.style.marginLeft = x3 + "px";
	});
}