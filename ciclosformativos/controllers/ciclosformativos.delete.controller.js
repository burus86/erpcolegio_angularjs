angular.module('myApp.ciclosformativos')

.controller('CiclosFormativosDeleteCtrl', function($rootScope, $scope, $http, url) { // CiclosFormativosDeleteCtrl controller

    $scope.delete = function() {

        // TODO-1: Realizar Petición DELETE a la URL /ciclosformativos/{id}
            // TODO-2: En caso de éxito, borrar ese ciclo del listado => splice(key, 1)

               $http.get(url + 'ciclosformativos/'+$scope.deleteCicloFormativo.id+'/delete'). //http.get(url + 'alumnos/'+id+'/delete').
            then(function(response) {


                angular.forEach($rootScope.ciclosformativos, function(item, key) {
                    if (item.id == $scope.deleteCicloFormativo.id)
                        $rootScope.ciclosformativos.splice(key, 1);
                });
                console.log('El ciclosformativo con id = "'+$scope.deleteCicloFormativo.id+'" y referencia = "'+$scope.deleteCicloFormativo.referencia+'" ha sido borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
        $('#modalCiclosFormativosDelete').modal('hide');
    };

})
