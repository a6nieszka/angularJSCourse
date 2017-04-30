(function(){
'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.comma = ',';
        $scope.item = '';
        $scope.arrayOfStrings = [];
        $scope.state = "";
            

        $scope.checkIfTooMuch = function(){
            if ($scope.item === ''){
                $scope.state = "Please enter data first";
            }

            else{
                $scope.arrayOfStrings = ($scope.item).split($scope.comma);
            
                if (($scope.arrayOfStrings).length > 3){
                    $scope.state = "Too Much!";
                    $scope.count = $scope.arrayOfStrings.length;   
                }
            
                if ((($scope.arrayOfStrings).length <= 3) && (($scope.arrayOfStrings).length >= 1)){
                    $scope.state = "Enjoy!";  
                    $scope.count = $scope.arrayOfStrings.length;
                }
            }
        }
    }

})();


