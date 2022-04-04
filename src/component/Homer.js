import { setStyle } from "./Game";
import homer from "../assets/homer.png";

function Homer() {

	const el = document.createElement('img');

	setStyle(el, {
		position: 'sticky',
		width: '64px',
		height: '64px',
		pointerEvents: 'none',
		top: '0px',
		left: '0px'
	});
	
	el.src = homer;

	this.el = el;
}

export default Homer;