angular.module('myApp.participantes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/participantes', {
    templateUrl: 'participantes/views/participantes.html',
    controller: 'ParticipantesCtrl'
  });
}]);