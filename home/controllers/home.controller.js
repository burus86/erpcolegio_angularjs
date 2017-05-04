angular.module('myApp.home')

.controller('HomeCtrl', function($scope, $http, url) { // HomeCtrl controller

	$scope.estadisticas = {
		num_usuarios: 0,
		num_profesores: 0,
		num_ciclosformativos: 0,
		num_asignaturas: 0,
	};
	
	$http.get(url + 'alumnos')
		.then(function(response) {
			$scope.estadisticas.num_usuarios = response.data.length;
		});
	
	$http.get(url + 'profesores')
		.then(function(response) {
			$scope.estadisticas.num_profesores = response.data.length;
		});
	
	$http.get(url + 'ciclosformativos')
		.then(function(response) {
			$scope.estadisticas.num_ciclosformativos = response.data.length;
		});
	
	$http.get(url + 'asignaturas')
		.then(function(response) {
			$scope.estadisticas.num_asignaturas = response.data.length;
		});

});
