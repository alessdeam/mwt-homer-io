import { setStyle } from "./Game";
import donut from "../assets/donut.png";

function LastDonut() {

	const el = document.createElement('img');

	setStyle(el, {
		position: 'absolute',
		width: '210px',
		height: '210px',
		pointerEvents: 'none',
		top: '650px',
		left: '1200px'
	});

	el.src = donut;
	
	clearInterval(id1);
	id1 = setInterval(donutMove(el, 250, 1200, Math.floor(Math.random() * 650), Math.floor(Math.random() * 1200)), 10);

	this.el = el;
}

var id1 = null;
function donutMove(donut, posTop, posLeft, targetTop, targetLeft) {
	var newPosTop = posTop;
	var newPosLeft = posLeft;
	var newDonutTop = targetTop;
	var newDonutLeft = targetLeft;
	clearInterval(id1);
	id1 = setInterval(frame, 10);
	function frame() {
		if (newPosLeft == newDonutLeft || newPosTop == newDonutTop) {
			newDonutTop = Math.floor(Math.random() * 600);
			newDonutLeft = Math.floor(Math.random() * 1000);
			donutMove(donut, newPosTop, newPosLeft, newDonutTop, newDonutLeft);
		} else {
			switch (true) {

				case (newDonutTop >= newPosTop && newDonutLeft >= newPosLeft):
					newPosTop++;
					newPosLeft++;
					donut.style.top = newPosTop + 'px';
					donut.style.left = newPosLeft + 'px';
					break;
				case (newDonutTop >= newPosTop && newDonutLeft < newPosLeft):
					newPosTop++;
					newPosLeft--;
					donut.style.top = newPosTop + 'px';
					donut.style.left = newPosLeft + 'px';
					break;
				case (newDonutTop < newPosTop && newDonutLeft >= newPosLeft):
					newPosTop--;
					newPosLeft++;
					donut.style.top = newPosTop + 'px';
					donut.style.left = newPosLeft + 'px';
					break;
				case (newDonutTop < newPosTop && newDonutLeft < newPosLeft):
					newPosTop--;
					newPosLeft--;
					donut.style.top = newPosTop + 'px';
					donut.style.left = newPosLeft + 'px';
					break;

				default:

			}
		}
	}
}

export default LastDonut;