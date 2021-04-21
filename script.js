'use strict';

let p1score = Math.floor(Math.random() * 6 + 1)
console.log(p1score)

let p2score = Math.floor(Math.random() * 6 + 1)
console.log(p2score)

let result = '';
if (p1score > p2score) {
    result = '🚩Player 1 wins!'
} else if (p1score == p2score) {
    result = 'Draw!!!!'
} else {
    result = '🚩Player 2 wins!'
}

// img src = 'images/dice1.png' >

https: //stackoverflow.com/questions/41904975/refresh-page-and-run-function-after-javascript
    // document.querySelector('img').setAttribute("src", `images/dice${p1score}.png`);

    document.querySelector('#p1IMG').setAttribute("src",
        `images/dice${p1score}.png`);
document.querySelector('#p2IMG').setAttribute("src",
    `images/dice${p2score}.png`);

document.querySelector('h1').innerText = result;