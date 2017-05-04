angular.module('myApp.usuarios', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'usuarios/views/login.html',
		controller: 'UsuariosLoginCtrl'
	}).when('/register', {
		templateUrl: 'usuarios/views/register.html',
		controller: 'UsuariosRegisterCtrl'
	}).when('/logout', {
		templateUrl: 'usuarios/views/logout.html',
		controller: 'UsuariosLogoutCtrl'
    }).when('/usuarios/:id', {
        templateUrl: 'usuarios/views/details.html',
        controller: 'UsuariosViewCtrl'
    });
}]);
