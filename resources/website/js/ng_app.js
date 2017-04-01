var app = angular.module('jevote.bar', []);

app.controller('MainController', function($scope, $http) {

    $scope.showSelect = false;
    $scope.toBeSelected = "";
    $scope.ranking = {};
    $scope.showReset = false;
    $scope.showVoteButton = false;
    $scope.buttonText = "Voter";


    var initCandidatesList = function() {
      $scope.candidatesList = ["Melenchon", "Fillon", "Le Pen", "Hamon", "Macron"];
    }

    initCandidatesList();

    $scope.choose = function(rank) {
      $scope.toBeSelected = rank;
      $scope.showSelect = true;
    }

    var removeCandidate = function(candidate) {
      var index = $scope.candidatesList.indexOf(candidate);    // <-- Not supported in <IE9
      if (index !== -1) {
          $scope.candidatesList.splice(index, 1);
      }
    }


    $scope.select = function(candidate) {
      $scope.ranking[$scope.toBeSelected] = candidate;
      $scope.showSelect = false;
      removeCandidate(candidate);
      $scope.showReset = true;
      if($scope.candidatesList.length == 2) {
        $scope.showVoteButton = true;
      }
    }

    $scope.reset = function() {
      $scope.ranking = {};
      initCandidatesList();
      $scope.showReset = false;
    }

    $scope.vote = function() {
      $scope.buttonText = ";)";
    }

});
