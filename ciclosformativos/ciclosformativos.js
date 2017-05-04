angular.module('myApp.ciclosformativos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ciclosformativos', {
        templateUrl: 'ciclosformativos/views/ciclosformativos.html',
        controller: 'CiclosFormativosListCtrl'
    }).when('/ciclosformativos/:id', {
        templateUrl: 'ciclosformativos/views/details.html',
        controller: 'CiclosFormativosViewCtrl'
    }).when('/ciclosformativos/:id/asignaturas', {
        templateUrl: 'ciclosformativos/views/asignaturas.html',
        controller: 'CiclosFormativosAsignaturasCtrl'
    });
}])

.run(function($rootScope, $http, url) {

    $rootScope.ciclosformativos = [];
    
    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de ciclosformativos
    $http.get(url + 'ciclosformativos')
        .then(function(response) {
            $rootScope.ciclosformativos = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
