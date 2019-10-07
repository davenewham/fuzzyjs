var bigram = require('./bigram.js');

/* Calculates the Jaccard similarity coefficient of two given strings. */
const jaccard = function (a, b) {
    if (a === b)
        return 1;

    a = new Set(bigram(a));
    b = new Set(bigram(b));

    let intersection = new Set([...a].filter(x => b.has(x)));
    let union = new Set([...a, ...b]);

    return intersection.size / union.size;
}