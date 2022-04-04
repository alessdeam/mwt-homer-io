import MediumFood from "./MediumFood";
import Container from "./Container";
import Homer from "./Homer";
import SmallFood from "./SmallFood";
import BigFood from "./BigFood";

function Game() {
    const _this = this;

    init();

    function init() {

        let targetsArray = [];
        _this.targetsArray = targetsArray;

        const canvas = new Container();
        canvas.el.setAttribute('id', 'container');
        document.body.appendChild(canvas.el);

        const myHomer = new Homer();
        myHomer.el.setAttribute('id', 'myHomer');
        canvas.el.appendChild(myHomer.el);

        for (var i = 0; i < 5; i++) {
            let smallFood = new SmallFood(32);
            smallFood.el.setAttribute('id', 'smallFood' + i);
            smallFood.el.setAttribute('class', 'targets');
            canvas.el.appendChild(smallFood.el);
            _this.targetsArray.push(smallFood.el);
        }

        for (var i = 0; i < 5; i++) {
            let mediumFood = new MediumFood(90);
            mediumFood.el.setAttribute('id', 'mediumFood' + i);
            mediumFood.el.setAttribute('class', 'targets');
            canvas.el.appendChild(mediumFood.el);
            _this.targetsArray.push(mediumFood.el);
        }

        for (var i = 0; i < 5; i++) {
            let bigFood = new BigFood(120);
            bigFood.el.setAttribute('id', 'bigFood' + i);
            bigFood.el.setAttribute('class', 'targets');
            canvas.el.appendChild(bigFood.el);
            _this.targetsArray.push(bigFood.el);
        }

    }

    let mousePosX = 0,
        mousePosY = 0,
        mouseHomer = document.getElementById('myHomer');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 2,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);
        
        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseHomer.style.top = revisedMousePosY + 'px';
        mouseHomer.style.left = revisedMousePosX + 'px';

        const targets = document.getElementsByClassName("targets");
        Object.entries(targets).map((object) => {
            touching(mouseHomer, object[1])
        });
    }
    delayMouseFollow();

    function touching(elem1, elem2) {
        let boundingElem1 = elem1.getBoundingClientRect();
        let boundingElem2 = elem2.getBoundingClientRect();
        let a = ((boundingElem1.y + boundingElem1.height) < (boundingElem2.y));
        let b = (boundingElem1.y > (boundingElem2.y + boundingElem2.height));
        let c = ((boundingElem1.x + boundingElem1.width) < boundingElem2.x);
        let d = (boundingElem1.x > (boundingElem2.x + boundingElem2.width));
        if (!(a || b || c || d)) {
            if (elem1.clientWidth > elem2.clientWidth) {
                elem2.style.display = "none";
                elem1.style.width = boundingElem1.width + 10 + 'px';
                elem1.style.height = boundingElem1.height + 10 + 'px';
                let index = _this.targetsArray.indexOf(elem2);
                _this.targetsArray.splice(index, 1);
                if (_this.targetsArray.length == 0) {
                    window.alert('Hai vinto!');
                }
            } else {
                window.alert('Hai perso!');
            }
        }
    }

}

export function setStyle(element, objProps) {
    const keys = Object.keys(objProps);
    keys.forEach(function (key) {
        element.style[key] = objProps[key];
    });
}

export default Game;