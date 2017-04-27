angular.module('myApp.alumnos')

.controller('AlumnosViewCtrl', function($scope, $http, $routeParams, url) { // AlumnosViewCtrl controller
    $http.get(url + 'alumnos/'+$routeParams.id).
        then(function(response) {
            $scope.detailsAlumno = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
