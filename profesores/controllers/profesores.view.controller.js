angular.module('myApp.profesores')

.controller('ProfesoresViewCtrl', function($scope, $http, $routeParams, url) { // AlumnosViewCtrl controller
    $http.get(url + 'profesores/'+$routeParams.id).
        then(function(response) {
            $scope.detailsProfesor = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });
})

