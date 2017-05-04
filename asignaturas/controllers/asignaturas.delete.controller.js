angular.module('myApp.asignaturas')

.controller('AsignaturasDeleteCtrl', function($rootScope, $scope, $http, url) { // AsignaturasDeleteCtrl controller

    $scope.delete = function() {

        // TODO-1: Realizar Petición DELETE a la URL /asignaturas/{id}
            // TODO-2: En caso de éxito, borrar esa asignatura del listado => splice(key, 1)
        $http.get(url + 'asignaturas/'+$scope.deleteAsignatura.id+'/delete'). //http.get(url + 'asignatura/'+id+'/delete').
            then(function(response) {

                angular.forEach($rootScope.asignaturas, function(item, key) {
                    if (item.id == $scope.deleteAsignatura.id)
                        $rootScope.asignaturas.splice(key, 1);
                });
                console.log('La asignatura con el codigo = "'+$scope.deleteAsignatura.codigo+'" y nombre = "'+$scope.deleteAsignatura.nombre+' perteneciente al curso '+$scope.deleteAsignatura.curso+'" ha sido borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });

        $('#modalAsignaturasDelete').modal('hide');
    };

})
