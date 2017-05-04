angular.module('myApp.alumnos')

.controller('AlumnosDeleteCtrl', function($rootScope, $scope, $http, url) { // AlumnosDeleteCtrl controller

    $scope.delete = function() {

        $http.get(url + 'alumnos/'+$scope.deleteAlumno.id+'/delete'). //http.get(url + 'alumnos/'+id+'/delete').
            then(function(response) {

                angular.forEach($rootScope.alumnos, function(item, key) {
                    if (item.id == $scope.deleteAlumno.id)
                        $rootScope.alumnos.splice(key, 1);
                });
                console.log('El alumno con id = "'+$scope.deleteAlumno.id+'" y nombre = "'+$scope.deleteAlumno.nombre+' '+$scope.deleteAlumno.apellidos+'" ha sido borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
        $('#modalAlumnosDelete').modal('hide');
    };

})
