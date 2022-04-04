import MediumDonut from "./MediumDonut";
import Container from "./Container";
import Homer from "./Homer";
import SmallDonut from "./SmallDonut";
import BigDonut from "./BigDonut";
import LastDonut from "./LastDonut";
import winScreen from "../assets/win-screen.png";
import loseScreen from "../assets/lose-screen.png";
import Button from "./Button";

function Game() {
    const _this = this;

    init();

    function init() {

        let targetsArray = [];
        _this.targetsArray = targetsArray;

        const container = new Container();
        container.el.setAttribute('id', 'container');
        document.body.appendChild(container.el);

        const myHomer = new Homer();
        myHomer.el.setAttribute('id', 'myHomer');
        container.el.appendChild(myHomer.el);

        for (var i = 0; i < 5; i++) {
            let smallDonut = new SmallDonut(i * 2, i * 2);
            smallDonut.el.setAttribute('id', 'smallDonut' + i);
            smallDonut.el.setAttribute('class', 'targets');
            container.el.appendChild(smallDonut.el);
            _this.targetsArray.push(smallDonut.el);
        }

        for (var i = 0; i < 5; i++) {
            let mediumDonut = new MediumDonut(i * 2, i * 2);
            mediumDonut.el.setAttribute('id', 'mediumDonut' + i);
            mediumDonut.el.setAttribute('class', 'targets');
            container.el.appendChild(mediumDonut.el);
            _this.targetsArray.push(mediumDonut.el);
        }

        for (var i = 0; i < 5; i++) {
            let bigDonut = new BigDonut(i * 2, i * 2);
            bigDonut.el.setAttribute('id', 'bigDonut' + i);
            bigDonut.el.setAttribute('class', 'targets');
            container.el.appendChild(bigDonut.el);
            _this.targetsArray.push(bigDonut.el);
        }

        let lastDonut = new LastDonut();
        lastDonut.el.setAttribute('id', 'lastDonut');
        lastDonut.el.setAttribute('class', 'targets');
        container.el.appendChild(lastDonut.el);
        _this.targetsArray.push(lastDonut.el);

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
                    const cont1 = document.getElementById("container");
                    while (cont1.hasChildNodes()) {
                        cont1.removeChild(cont1.lastChild);
                    }
                    cont1.style.backgroundImage = "url('" + winScreen + "')";
                    cont1.style.zIndex = 1001;
                    const button = new Button();
                    document.addEventListener("click", function(){
                        window.location.reload()
                      });
                    cont1.appendChild(button.el);
                }
            } else {
                const cont2 = document.getElementById("container");
                while (cont2.hasChildNodes()) {
                    cont2.removeChild(cont2.lastChild);
                }
                cont2.style.backgroundImage = "url('" + loseScreen + "')";
                cont2.style.zIndex = 1001;
                const button = new Button();
                document.addEventListener("click", function(){
                    window.location.reload()
                  });
                cont2.appendChild(button.el);
            }
        }
    }

    function refresh() {
        window.location.reload()
    }
}

export function setStyle(element, objProps) {
    const keys = Object.keys(objProps);
    keys.forEach(function (key) {
        element.style[key] = objProps[key];
    });
}

export default Game;