/* Returns an array of consecutive 2-letter pairs of the given sentence. */
bigram = function (sentence) {
    let letters = sentence.split('');
    let array = [];

    for (let i = 0; i < letters.length - 1; i++) {
        let first = letters[i];
        let second = letters[i + 1];
        array.push(first + second);
    }

    return array;
}

module.exports = bigram; 
