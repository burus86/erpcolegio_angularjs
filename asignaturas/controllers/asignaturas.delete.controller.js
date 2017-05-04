angular.module('myApp.asignaturas')

.controller('AsignaturasDeleteCtrl', function($rootScope, $scope, $http, url) { // AsignaturasDeleteCtrl controller

    $scope.delete = function() {

        // TODO-1: Realizar Petición DELETE a la URL /asignaturas/{id}
            // TODO-2: En caso de éxito, borrar esa asignatura del listado => splice(key, 1)

        $('#modalAsignaturasDelete').modal('hide');
    };

})
