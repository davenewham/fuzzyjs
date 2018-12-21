// hamming distance
// strings *must* be of equal length

module.exports = {
        hammingDistance:function(x,y) {

        if (x.length != y.length) {
            console.log("error: cannot calculate hamming value of strings of different length!");
            return null;
        }


        count = 0;
        for (var i = 0; i < x.length; i++) {
            if (x[i] != y[i]) {
                count++;
            }
        }
        console.log("returning hamming val of: " + count);

        return (count);
    }

};