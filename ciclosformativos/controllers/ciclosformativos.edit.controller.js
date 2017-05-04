angular.module('myApp.ciclosformativos')

.controller('CiclosFormativosEditCtrl', function($rootScope, $scope, $http, url) { // CiclosFormativosEditCtrl controller

    $scope.submit = function(){
        var newCicloFormativo = {
            referencia: $scope.form.referencia,
            nombre: $scope.form.nombre,
            nivel: $scope.form.nivel,
            duracion: $scope.form.duracion,
            familia_profesional: $scope.form.familia_profesional
        };
        // Añadir cicloformativo
        if ($scope.new == 1) {
            if ($rootScope.ciclosformativos.length > 0)
                newCicloFormativo['id'] = $rootScope.ciclosformativos[$rootScope.ciclosformativos.length-1].id + 1;
            else
                newCicloFormativo['id'] = 1;
            // TODO-1: Realizar Petición POST a la URL /ciclosformativos/
                // TODO-2: En caso de éxito, añadir (push) ese ciclo al listado $rootScope.ciclosformativos

        }
        // Actualizar cicloformativo
        else {
            newCicloFormativo['id'] = $scope.form.id;

            var id = $scope.form.id;
            // TODO-1: Realizar Petición PUT a la URL /ciclosformativos/{id}
                // TODO-2: En caso de éxito, actualizar los datos de ese ciclo en el listado $rootScope.ciclosformativos

        }
        $('#modalCiclosFormativosForm').modal('hide');
    };

})
