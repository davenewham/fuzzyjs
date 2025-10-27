// JaroWinkler Distance
const jaroDistance = require('./jaro.js');

const p = 0.1; //scaling factor for calculation

jarowinklerDistance = function (x, y) {
    let jaro = jaroDistance(x, y);

    let simw; // jaro similariy
    let l = 0; // length of common prefix at start, up to 4 chjars


    /* stud to implement jaro winker sim here */

    for (i = 0; i < 4; i++) {
        if (x[i] !== y[i]) {
            break;
        }
        l++;
    }
    simw = jaro + (l * p * (1 - jaro));
    return simw;
}


module.exports = jarowinklerDistance;