angular.module('myApp.alumnos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/alumnos', {
		templateUrl: 'alumnos/views/alumnos.html',
		controller: 'AlumnosListCtrl'
	}).when('/alumnos/:id', {
		templateUrl: 'alumnos/views/details.html',
		controller: 'AlumnosViewCtrl'
    }).when('/alumnos/:id/notas', {
        templateUrl: 'alumnos/views/notas.html',
        controller: 'AlumnosNotasCtrl'
    });
}]);
