'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.alumnos',
	'myApp.profesores',
	'myApp.ciclosformativos',
	'myApp.asignaturas',
	'myApp.login',
	'myApp.home',
	'myApp.participantes'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	//$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/'}); //'/login'
}])
.constant('url', 'http://localhost/lumen/public/api/v1/') // FIXME: http://{ip_ies-sanclemente}/lumen/public/api/v1/
