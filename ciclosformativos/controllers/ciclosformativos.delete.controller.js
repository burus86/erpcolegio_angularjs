angular.module('myApp.ciclosformativos')

.controller('CiclosFormativosDeleteCtrl', function($rootScope, $scope, $http, url) { // CiclosFormativosDeleteCtrl controller

    $scope.delete = function() {

        // TODO-1: Realizar Petición DELETE a la URL /ciclosformativos/{id}
            // TODO-2: En caso de éxito, borrar ese ciclo del listado => splice(key, 1)

        $('#modalCiclosFormativosDelete').modal('hide');
    };

})
