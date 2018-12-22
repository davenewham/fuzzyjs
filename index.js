var hamming = require('./hamming.js');
var levenshtein = require('./levenshtein.js');
var jaroDistance = require('./jaro.js');
x = 'daved';
y = 'dovid';

console.log("Hamming: " + hammingDistance(x,y));
console.log("Levensthein: " + levenstheinDistance(x,y));
console.log("Jaro Distance: " + jaroDistance(x,y));


