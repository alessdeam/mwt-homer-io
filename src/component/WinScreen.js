import { setStyle } from "./Game";
import winScreen from "../assets/win-screen.png";

function WinScreen() {

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

	el.style.backgroundImage = "url('" + winScreen + "')";

	const btn = document.createElement("button");
	btn.innerHTML = "Rigioca";
	el.appendChild(btn);
	
	btn.addEventListener("click", refresh);

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

	this.el = el;
}

function refresh() {
	debugger
	window.location.reload()
}

export default WinScreen;