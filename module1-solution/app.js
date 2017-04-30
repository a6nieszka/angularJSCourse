(function(){
'use strict';

    angular.module('lunchMenuApp', [])
        .controller('menuItemsController', menuItemsController);

    menuItemsController.$inject = ['$scope'];
    function menuItemsController($scope){
        $scope.comma = ',';
        $scope.item = '';
        $scope.arrayOfStrings = [];
        $scope.state = "";
        $scope.count = 0;
    

        $scope.checkIfTooMuch = function(){
            //console.log($scope.arrayOfStrings.length);
            if ($scope.item === ''){
                $scope.state = "Please enter data first";
            }

            else{
                $scope.arrayOfStrings = ($scope.item).split($scope.comma);
                //console.log($scope.arrayOfStrings.length);
                //$scope.count = $scope.arrayOfStrings.length;

                if (($scope.arrayOfStrings).length > 3){
                    $scope.state = "Too Much!";
                    $scope.count = $scope.arrayOfStrings.length;
                    
                }
                /*
                if ((($scope.arrayOfStrings).length) < 1){
                    $scope.state = "Please enter data first";
                    //$scope.count = $scope.arrayOfStrings.length;
                }
                */

                if ((($scope.arrayOfStrings).length <= 3) && (($scope.arrayOfStrings).length >= 1)){
                    $scope.state = "Enjoy!";  
                    $scope.count = $scope.arrayOfStrings.length;
                }

                //$scope.count = 0;
            }
        }
    }

})();


