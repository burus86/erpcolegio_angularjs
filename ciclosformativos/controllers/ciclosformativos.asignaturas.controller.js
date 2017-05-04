angular.module('myApp.ciclosformativos')

.controller("CiclosFormativosAsignaturasCtrl", function($scope, $http, $routeParams, url) { // CiclosFormativosAsignaturasCtrl controller
    $scope.detailsCiclo = {};
    $http.get(url + 'ciclosformativos/'+$routeParams.id+'/asignaturas').
    then(function(response) {
        $scope.asignaturasCiclo = response.data;
        if ($scope.asignaturasCiclo.length > 0)
           $scope.detailsAsignaturas = $scope.asignaturasCiclo[0].asignaturas;
   }, function(response) {
    $scope.notice = response.status + " " + response.data.error;
});
})


