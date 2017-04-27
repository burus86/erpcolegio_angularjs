angular.module('myApp.alumnos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/alumnos', {
		templateUrl: 'alumnos/alumnos.html',
		controller: 'AlumnosListCtrl'
	}).when('/alumnos/:id', {
		templateUrl: 'alumnos/details.html',
		controller: 'AlumnosViewCtrl'
    }).when('/alumnos/:id/notas', {
        templateUrl: 'alumnos/notas.html',
        controller: 'AlumnosNotasCtrl'
    });
}]);
