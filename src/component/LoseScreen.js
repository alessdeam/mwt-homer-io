import { setStyle } from "./Game";
import loseScreen from "../assets/lose-screen.png";

function LoseScreen() {

	const el = document.createElement('div');

	setStyle(el, {
		position: 'absolute',
		width: '1540px',
		height: '732px',
		margin: '-32px 0 0 -32px',
		border: '1px solid #0f1c64',
		pointerEvents: 'none',
		zIndex: '1000'
	});

	el.style.backgroundImage = "url('" + loseScreen + "')";

	const btn = document.createElement("button");
	btn.innerHTML = "Riprova";
	el.appendChild(btn);

	setStyle(btn, {
		position: 'absolute',
		width: '40px',
		height: '22px',
		margin: '-32px 0 0 -32px',
		border: '1px solid #0f1c64',
		zIndex: '1001',
		top: '80px',
		left: '84px',
		width: '100px'
	});
	
	btn.addEventListener("click", refresh);

	this.el = el;
}

function refresh() {
	console.log('c')
	window.location.reload()
}

export default LoseScreen;