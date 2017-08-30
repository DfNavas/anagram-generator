const angular = require('angular');
const anagramBuilder=require('../engines/anagram')

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