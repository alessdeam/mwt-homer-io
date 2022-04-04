import { setStyle } from "./Game";

function Button() {

	const el = document.createElement("button");
	el.innerHTML = "Rigioca";
	
	el.addEventListener("click", refresh);

	setStyle(el, {
		position: 'absolute',
		width: '40px',
		height: '22px',
		margin: '-32px 0 0 -32px',
		border: '1px solid #0f1c64',
		zIndex: '1100',
		top: '80px',
		left: '84px',
		height: '75px',
		width: '150px',
        fontSize: '25px'
	});

	this.el = el;
}

function refresh() {
	window.location.reload()
}

export default Button;