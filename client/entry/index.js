const angular = require('angular');
const _ = require('lodash');


const anagramBuilder = function (word) {
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
}
angular.module('anagramGenerator', [])
    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.anagrams = [];
        $scope.generateAnagrams = function () {

            $scope.anagrams = anagramBuilder($scope.word)
        };
    }]);

angular.element(function () {
    angular.bootstrap(document, ['anagramGenerator']);
});