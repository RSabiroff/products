'use strict';


let headlines = document.getElementsByClassName('headline');

for (let h of headlines) {
	h.onclick = function (e) {
		h.nextElementSibling.style.display = "flex";
	};
}



let imgs = document.getElementsByTagName('img');

for (let img of imgs) {
	img.setAttribute("draggable", "false");
	
	img.onclick = function (e) {
		document.getElementById('ID_bigImage').setAttribute('src', img.getAttribute('src'));

		document.getElementById('ID_bigImage-wrapper').style.display = 'flex';
	};
}



let grade = document.getElementsByClassName('grade');

for (let i of grade) {
	let firstCoordX;
	let previousMargin = 0;

	let image = i.firstElementChild.firstElementChild;

	function move(e) {
		image.style.marginLeft = previousMargin + e.clientX - firstCoordX + "px";

		if (parseInt(image.style.marginLeft) > 0) {
			image.style.marginLeft = 0;
		} else if (parseInt(image.style.marginLeft) < -178) {
			image.style.marginLeft = -178 + "px";
		}
	}

	i.addEventListener("pointerdown", function (e) {
		firstCoordX = e.clientX;

		i.addEventListener("pointermove", move);
	});

	i.addEventListener("pointerup", function (e) {
		previousMargin = parseInt(  window.getComputedStyle(image).marginLeft  );

		i.removeEventListener("pointermove", move);
	});
}



let buttons = document.getElementsByClassName('back-button');

for (let b of buttons) {
	b.onclick = function (e) {
		b.parentElement.style.display = "none";
		// alert( b.parentElement.style );
	};
}




document.getElementById('ID_bigImage-wrapper').onclick = function (e) {
	document.getElementById('ID_bigImage-wrapper').style.display = 'none';
};