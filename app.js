var app = angular.module("myShoppingList", []);
var clearBox = document.getElementById('boxAdd');
app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.addItem = function(){
    if($scope.products.indexOf($scope.item) == -1) {
        $scope.products.push($scope.item);
        clearBox.value = '';
        
    } else {
        $scope.errortext = "Já existe este item em sua lista!"
        alert("O item já existe");
        clearBox.value = '';
    }
  }
  $scope.removeItem = function (x){
      $scope.products.splice(x,1);
  }
});