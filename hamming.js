// hamming distance
// strings *must* be of equal length
hammingDistance = function (x, y) {

    if (x.length != y.length) {
        return null;
    }


    count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            count++;
        }
    }

    return (count);
}

module.exports = hammingDistance;