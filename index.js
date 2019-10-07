var hamming = require('./hamming.js');
var levenshtein = require('./levenshtein.js');
var jaroDistance = require('./jaro.js');
var jaroWinklerDistance = require('./jarowinkler.js');
var naive = require('./naive.js');
var jaccard = require('./jaccard.js');

x = 'david';
y = 'daved';

console.log("Naive Match: " + naive(x, y));
console.log("Hamming: " + hammingDistance(x, y));
console.log("Levensthein: " + levenstheinDistance(x, y));
console.log("Jaro Distance: " + jaroDistance(x, y));
console.log("Jaro Winkler:" + jaroWinklerDistance(x, y));
console.log("Jaccard similarity coefficient:" + jaccard(x, y));