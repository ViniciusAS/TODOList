
angular.module('TODOList', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('List', function($scope){

  $scope.platform = ionic.Platform.platform();

  $scope.todoList = [
    "Preparar apresentação de slides",
    "Ir até o local de apresentação",
    "Preparar o computador",
    "Apresentar",
    "Responder as perguntas"
  ];
  
  $scope.inserir = function(novoItem){
    $scope.todoList.push(novoItem);
    $scope.novoItem = "";
  };

  $scope.remover = function(item){
    var index = $scope.todoList.indexOf(item);
    if (index >= 0){
      $scope.todoList.splice(index,1);
    }
  };

});
