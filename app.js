(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.content="";
  $scope.msg ="";
  $scope.NoOfItems = 0;

  $scope.displayNoOfItems = function () {
    if ($scope.content == "") {
      $scope.NoOfItems = 0
      $scope.msg = "Please enter data first";
    }
    else {
      var countNoOfItems =(($scope.content).split(",")).length;
      $scope.NoOfItems = countNoOfItems;
      if (countNoOfItems > 0 && countNoOfItems <= 3) {
        $scope.msg = "ENJOY";
      }
      else if(countNoOfItems > 0 && countNoOfItems >=4){
        $scope.msg = "TOO MUCH";
      }
    }

  }

}

})();
