angular.module('myApp.alumnos')

.controller("AlumnosNotasCtrl", function($scope, $http, $routeParams, url) { // AlumnosNotasCtrl controller
    $http.get(url + 'alumnos/'+$routeParams.id).
        then(function(response) {
            $scope.detailsAlumno = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

    $http.get(url + 'alumnos/'+$routeParams.id+'/notas').
        then(function(response) {
            $scope.notasAlumnos = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });
})
