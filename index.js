var hamming = require('./hamming.js');
var levenshtein = require('./levenshtein.js');

x = 'davidnewham';
y = 'davednewham';

console.log(hamming.hammingDistance(x,y));
console.log(levenshtein.levenstheinDistance(x,y)); 


