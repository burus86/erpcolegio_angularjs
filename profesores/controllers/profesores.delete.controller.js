angular.module('myApp.profesores')

.controller('ProfesoresDeleteCtrl', function($rootScope, $scope, $http, url) { // ProfesoresDeleteCtrl controller

    $scope.delete = function() {

        $http.get(url + 'profesores/'+$scope.deleteProfesor.id+'/delete').
            then(function(response) {

                angular.forEach($rootScope.profesores, function(item, key) {
                    if (item.id == $scope.deleteProfesor.id)
                        $rootScope.profesores.splice(key, 1);
                });
                console.log('El profesor con id = "'+$scope.deleteProfesor.id+'" y nombre = "'+$scope.deleteProfesor.nombre+' '+$scope.deleteProfesor.apellidos+'" ha sido borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });

        $('#modalProfesoresDelete').modal('hide');
    };

})
