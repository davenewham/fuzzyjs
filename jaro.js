
const jaroDistance = function (s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let s1_length = s1.length;
    let s2_length = s2.length;

    let [m, t] = countMatchingChars(s1, s2);
    if (m===0) {return 0;}

    let sim = (1/3) * ((m/s1_length) + (m/s2_length) + ((m-t)/m));
    return sim;
}

const countMatchingChars = function(s1, s2){
    let s1_length = s1.length;
    let s2_length = s2.length;

    let distance = maxMatchingDistance(s1_length, s2_length);
    var s1_matches = new Array(s1_length);
    var s2_matches = new Array(s2_length);

    let m = 0;
    [...s1].forEach(function(char, i) {
        j = s2.indexOf(char, i-distance);
        if (j != -1 && j < i + distance) {
            if (!s2_matches[j]){
                s1_matches[i] = true;
                s2_matches[j] = true;
                m++;
            }
        }
    });

    let t = countTranspositions(s1_matches,s2_matches, s1,s2, s1_length,s2_length);
    return [m, t];
}

const countTranspositions = function(s1_matches,s2_matches, s1,s2, s1_length,s2_length){
    let t = 0.0;
    let k = 0;
    for ( i = 0; i < s1_length; i++) {
        if (s1_matches[i])
        {
            while (!s2_matches[k]) {k++;}
            if (s1[i] != s2[k]) t += 0.5;
            k++;
        }
    }

    return t;
}

const maxMatchingDistance = function(s1_length, s2_length) {
    return (Math.max((s1_length,s2_length)/2) - 1);
}

module.exports = jaroDistance;