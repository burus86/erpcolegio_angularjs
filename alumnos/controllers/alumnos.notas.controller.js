angular.module('myApp.alumnos')

.controller("AlumnosNotasCtrl", function($scope, $http, $routeParams, url) { // AlumnosNotasCtrl controller
    $scope.detailsAlumno = {};
    $http.get(url + 'alumnos/'+$routeParams.id+'/notas').
        then(function(response) {
            $scope.notasAlumnos = response.data;
            if ($scope.notasAlumnos.length > 0)
                $scope.detailsAlumno = $scope.notasAlumnos[0].alumno;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });
})
