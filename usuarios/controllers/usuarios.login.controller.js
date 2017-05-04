angular.module('myApp.usuarios')

.controller('UsuariosLoginCtrl', function($rootScope, $scope, $http, $routeParams, url) { // UsuariosLoginCtrl controller

	$scope.success = false;
	$scope.error = false;

	$scope.submit = function() {
	    // TODO-1: Realizar Petición GET a la URL /usuarios/emails/{email}/passwords/{password}
	        // TODO-2: En caso de éxito y si response.data no está vacio 
	        // 		guardar en $scope.currUsuario el JSON devuelto
	        // 		guardar en $rootScope.autenticado el valor 1

	};
});
