angular.module('myApp.usuarios')

.controller('UsuariosViewCtrl', function($scope, $http, $routeParams, url) { // UsuariosViewCtrl controller
    
    $http.get(url + 'usuarios/'+$routeParams.id).
        then(function(response) {
            $scope.detailsUsuario = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });
})
