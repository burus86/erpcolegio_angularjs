angular.module('myApp.profesores')

.controller('ProfesoresDeleteCtrl', function($rootScope, $scope, $http, url) { // ProfesoresDeleteCtrl controller

    $scope.delete = function() {

        // TODO-1: Realizar Petición DELETE a la URL /profesores/{id}
            // TODO-2: En caso de éxito, borrar ese profesor del listado => splice(key, 1)

        $('#modalProfesoresDelete').modal('hide');
    };

})
