angular.module('myApp.profesores', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profesores', {
        templateUrl: 'profesores/views/profesores.html',
        controller: 'ProfesoresListCtrl'
    }).when('/profesores/:id', {
        templateUrl: 'profesores/views/details.html',
        controller: 'ProfesoresViewCtrl'
    });
}])

.run(function($rootScope, $http, url) {

    $rootScope.profesores = [];

    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de profesores
    $http.get(url + 'profesores')
        .then(function(response) {
            $rootScope.profesores = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
