'use strict';

// document.addEventListener("pointermove", function (e) {
// 	console.log(e.screenX);
// });

let imgs = document.getElementsByTagName('img');

for (let img of imgs) {
	img.setAttribute("draggable", "false");
}


let grade = document.getElementsByClassName('grade');

let x1;
let x2;
let x3;

for (let i of grade) {
	i.addEventListener("pointerdown", function (e) {
		x1 = e.clientX;
	});

	i.addEventListener("pointermove", function (e) {
		x2 = e.clientX;
		x3 = x2 - x1;
		ID_test.style.marginLeft = x3 + "px";
	});
}