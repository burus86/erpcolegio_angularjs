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
}])

.run(function($rootScope, $http, url) {

    $rootScope.alumnos = [];
    
    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de alumnos
    $http.get(url + 'alumnos')
        .then(function(response) {
            $rootScope.alumnos = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
