angular.module('myApp.asignaturas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/asignaturas', {
        templateUrl: 'asignaturas/views/asignaturas.html',
        controller: 'AsignaturasListCtrl'
    }).when('/asignaturas/:id', {
        templateUrl: 'asignaturas/views/details.html',
        controller: 'AsignaturasViewCtrl'
    }).when('/asignaturas/:id/notas', {
        templateUrl: 'asignaturas/views/notas.html',
        controller: 'AsignaturasNotasCtrl'
    });
}])

.run(function($rootScope, $http, url) {

    $rootScope.asignaturas = [];
    
    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de asignaturas
    $http.get(url + 'asignaturas')
        .then(function(response) {
            $rootScope.asignaturas = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
