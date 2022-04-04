import { setStyle } from "./Game";
import donut from "../assets/donut.png";

function MediumFood(size) {

	const el = document.createElement('img');

	setStyle(el, {
		position: 'absolute',
		width: size + 'px',
		height: size + 'px',
		pointerEvents: 'none',
		top: Math.floor(Math.random() * 600) + 'px',
		left:  Math.floor(Math.random() * 1000) + 'px'
	});

	el.src = donut;
	
	clearInterval(id1);
	id1 = setInterval(foodMove(el, 650, 1200, Math.floor(Math.random() * 650), Math.floor(Math.random() * 1200)), 10);

	this.el = el;
}

var id1 = null;
function foodMove(food, posTop, posLeft, targetTop, targetLeft) {
	var newPosTop = posTop;
	var newPosLeft = posLeft;
	var newFoodTop = targetTop;
	var newFoodLeft = targetLeft;
	clearInterval(id1);
	id1 = setInterval(frame, 10);
	function frame() {
		if (newPosLeft == newFoodLeft || newPosTop == newFoodTop) {
			newFoodTop = Math.floor(Math.random() * 600);
			newFoodLeft = Math.floor(Math.random() * 1000);
			foodMove(food, newPosTop, newPosLeft, newFoodTop, newFoodLeft);
		} else {
			switch (true) {

				case (newFoodTop >= newPosTop && newFoodLeft >= newPosLeft):
					newPosTop++;
					newPosLeft++;
					food.style.top = newPosTop + 'px';
					food.style.left = newPosLeft + 'px';
					break;
				case (newFoodTop >= newPosTop && newFoodLeft < newPosLeft):
					newPosTop++;
					newPosLeft--;
					food.style.top = newPosTop + 'px';
					food.style.left = newPosLeft + 'px';
					break;
				case (newFoodTop < newPosTop && newFoodLeft >= newPosLeft):
					newPosTop--;
					newPosLeft++;
					food.style.top = newPosTop + 'px';
					food.style.left = newPosLeft + 'px';
					break;
				case (newFoodTop < newPosTop && newFoodLeft < newPosLeft):
					newPosTop--;
					newPosLeft--;
					food.style.top = newPosTop + 'px';
					food.style.left = newPosLeft + 'px';
					break;

				default:

			}
		}
	}
}

export default MediumFood;