// levensthein distance
const math = require('mathjs')



    levenstheinDistance = function (x, y) {
        n = x.length;
        m = y.length;
        if (n == 0) {
            return m;
        }
        if (n == 0) {
            return n;
        }


        //construct matrix 0 to A rows, 0 to B columns
        matrix = math.zeros(n, m);

        // add 1-num into matrix
        for (i = 0; i <= n; i++) {
            matrix.set([i, 0], i);
        }
        for (i = 0; i <= m; i++) {
            matrix.set([0, i], i);
        }

        cost = 0;
        // iterate and check
        let si;
        let tj;

        for (i = 1; i <= n; i++) {
            si = x[i - 1];
            for (j = 1; j <= m; j++) {
                tj = y[j - 1];
                if (si == tj) {
                    cost = 0;
                } else {
                    cost = 1;
                }
                matrix.set([i, j], Math.min(matrix.get([i - 1, j]) + 1, matrix.get([i, (j - 1)]) + 1, matrix.get([i - 1, j - 1]) + cost));
            }
        }


      //  console.log("return distance of" +  matrix.get([n,m]));
        return matrix.get([n,m]);

    }

module.exports = levenstheinDistance;
