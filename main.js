import gsap from 'gsap';
import './style.css'
import './public/assets/loader.css'
import './public/assets/landing.css'
import 'bootstrap'
import javascriptLogo from './javascript.svg'
// import { barInterval } from './counter.js';





const bar = document.querySelector('.loading__innerbar');
const counter_num = document.querySelector('.loading__counter--number');
let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if(c === 101) {
        clearInterval(barInterval);
        gsap.to(".loading__bar", {
            duration: 5,
            rotate: "90deg",
            left: "1000%",
        });
        gsap.to(".loading__text, .loading__counter", {
            duration: 1,
            opacity: 0.
        });
        gsap.to(".loading__box", {
            duration: 1,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".loading__svg", {
            duration: 10,
            opacity: 1,
            rotate: "360deg"
        });
        gsap.to(".loading__box", {
            delay: 2,
            border: "none",
        });
        gsap.to(".loading", {
            delay: 2,
            duration: 2,
            background: "transparent",
            opacity: 0.5
        });
    }
}, 20);