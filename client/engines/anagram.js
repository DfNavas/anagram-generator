const _ = require('lodash');

const anagramBuilder = function (word) {
    if(word.match(/^[a-zA-Z]*$/)){
        var index = 0;
        var counter = 0;
        var allAnagrams = [];

        function swap(a, b, str) {
            str = str.split("");
            var temp = str[a];
            str[a] = str[b];
            str[b] = temp;
            return str.join("");
        }

        function anagram(_a, _b, ar) {
            if (_a == _b) {
                allAnagrams[index] = ar;
                index++;
                counter++;
            }
            else {
                for (var i = _a; i <= _b; i++) {
                    ar = swap(_a, i, ar);
                    anagram(_a + 1, _b, ar);
                    ar = swap(_a, i, ar);
                }
            }
        }

        var originalWord = word;
        var wordLength = originalWord.length;
        anagram(0, wordLength - 1, originalWord);

        return _.sortedUniq(allAnagrams).sort();
    }else throw new Error("That's not a word")


}
module.exports=anagramBuilder