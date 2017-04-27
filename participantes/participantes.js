angular.module('myApp.participantes', ['ngRoute'])

// Declared route 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/participantes', {
    templateUrl: 'participantes/participantes.html',
    controller: 'ParticipantesCtrl'
  });
}]);