angular.module('myApp.ciclosformativos')

.controller("CiclosFormativosViewCtrl", function($scope, $http, $routeParams, url) { // CiclosFormativosViewCtrl controller

    // TODO-1: Realizar Petición GET a la URL /ciclosformativos/{id}
        // TODO-2: En caso de éxito, guardar en $scope.detailsCiclo el JSON devuelto
$http.get(url + 'ciclosformativos/'+$routeParams.id).
        then(function(response) {
            $scope.detailsCiclo = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });
})
