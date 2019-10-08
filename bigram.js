/* Returns an array of consecutive 2-letter pairs of the given sentence. */
bigram = function (sentence) {
    var letters = sentence.split('');
    var array = [];

    for (var i = 0; i < letters.length - 1; i++) {
        var first = letters[i];
        var second = letters[i + 1];
        array.push(first + second);
    }

    return array;
}

module.exports = bigram; 
