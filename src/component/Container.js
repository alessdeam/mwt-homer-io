import { setStyle } from "./Game";

function Container() {

	const el = document.createElement('div');

	setStyle(el, {
		position: 'absolute',
		width: '1540px',
		height: '732px',
		margin: '-32px 0 0 -32px',
		border: '1px solid #0f1c64',
		pointerEvents: 'none',
		zIndex: '-1000',
		cursor: 'none',
		background: 'gold'
	});

	this.el = el;
}

export default Container;