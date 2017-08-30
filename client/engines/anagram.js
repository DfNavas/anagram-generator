const _ = require('lodash');


function anagrams(str) {
    if (!str.match(/^[a-zA-Z]*$/)) {
        throw new Error("Input is not a word")
    } else return _.uniq(permutator(str.split(""))).sort()
}

function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur).join(""));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}


module.exports = anagrams