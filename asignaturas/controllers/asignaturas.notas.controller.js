angular.module('myApp.asignaturas')

.controller("AsignaturasNotasCtrl", function($scope, $http, $routeParams, url) { // AlumnosNotasCtrl controller
    $scope.detailsAsignatura = {};

    // TODO-1: Realizar Petición GET a la URL /ciclosformativos/{id}/asignaturas
        // TODO-2: En caso de éxito, guardar en:
        	// TODO-3: $scope.asignaturasCiclo el JSON devuelto
        	// TODO-4: $scope.detailsCiclo los datos del ciclo seleccionado
           $http.get(url + 'asignaturas/'+$routeParams.id+'/notas').
           then(function(response) {
            $scope.notasAsignaturas = response.data;
            if ($scope.notasAsignaturas.length > 0)
                $scope.detailsAsignatura = $scope.notasAsignaturas[0].asignatura;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

       })
