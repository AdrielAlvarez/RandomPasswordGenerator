const process = require('process');
const alpha = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
const nume = [1, 2, 3, 4, 5, 6, 7];
const speci = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "å", "|"];
let password = [];

let length = process.argv[2]
/* */
if (isNaN(parseInt(length))) {
    console.log("Error: Value is not a number")
} else {
    for (let i = 0; i < length; i++) {
        let dieRoll = Math.floor((Math.random() * 6) + 1);
        let selectedCharacter = dieRoll;
        if (selectedCharacter === 1 || selectedCharacter === 5) {
            let alphaRandom = Math.floor(Math.random() * 23);
            password.push(alpha[alphaRandom]);
        } else if (selectedCharacter === 2 || selectedCharacter === 6) {
            let numeRandom = Math.floor(Math.random() * 7);
            password.push(nume[numeRandom]);
        } else {
            let speciRandom = Math.floor(Math.random() * 16);
            password.push(speci[speciRandom]);
        }
    }
    password = password.join();
    console.log(password.replace(/,/g, ""))
}

// console.log(password)