angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { //'/home'
        templateUrl: 'home/views/home.html',
        controller: 'HomeCtrl'
    });
}])

.run(function($rootScope, $http, url) {

    $rootScope.usuarios = [];

    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de usuarios
    $http.get(url + 'usuarios')
        .then(function(response) {
            $rootScope.usuarios = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
