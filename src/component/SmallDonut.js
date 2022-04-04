import { setStyle } from "./Game";
import donut from "../assets/donut.png";

function SmallDonut(positionTop, positionLeft) {

	const el = document.createElement('img');

	setStyle(el, {
		position: 'absolute',
		width: '32px',
		height: '32px',
		pointerEvents: 'none',
		top: '650px',
		left: '1200px'
	});

	el.src = donut;
	
	clearInterval(id1);
	id1 = setInterval(donutMove(el, 530 + positionTop, 500 + positionLeft, Math.floor(Math.random() * 650), Math.floor(Math.random() * 1200)), 10);
	
	this.el = el;
}

var id1 = null;
function donutMove(donut, posTop, posLeft, targetTop, targetLeft) {
	var posTop = posTop;
	var posLeft = posLeft;
	var targetTop = targetTop;
	var targetLeft = targetLeft;
	clearInterval(id1);
	id1 = setInterval(frame, 10);
	function frame() {
		if (posTop == targetTop || posLeft == targetLeft) {
			targetTop = Math.floor(Math.random() * 650);
			targetLeft = Math.floor(Math.random() * 1500);
			donutMove(donut, posTop, posLeft, targetTop, targetLeft);
		} else {
			switch (true) {

				case (targetTop >= posTop && targetLeft >= posLeft):
					posTop++;
					posLeft++;
					donut.style.top = posTop + 'px';
					donut.style.left = posLeft + 'px';
					break;
				case (targetTop >= posTop && targetLeft < posLeft):
					posTop++;
					posLeft--;
					donut.style.top = posTop + 'px';
					donut.style.left = posLeft + 'px';
					break;
				case (targetTop < posTop && targetLeft >= posLeft):
					posTop--;
					posLeft++;
					donut.style.top = posTop + 'px';
					donut.style.left = posLeft + 'px';
					break;
				case (targetTop < posTop && targetLeft < posLeft):
					posTop--;
					posLeft--;
					donut.style.top = posTop + 'px';
					donut.style.left = posLeft + 'px';
					break;

				default:

			}
		}
	}
}

export default SmallDonut;