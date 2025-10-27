module.exports = {
    hamming: require('./hamming.js'),
    levenshtein: require('./levenshtein.js'),
    jaroDistance: require('./jaro.js'),
    jaroWinklerDistance: require('./jarowinkler.js').default,
    naive: require('./naive.js'),
    bigram: require('./bigram.js'),
    jaccard: require('./jaccard.js')
}

