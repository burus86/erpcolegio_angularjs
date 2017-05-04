angular.module('myApp.profesores')

.controller('ProfesoresEditCtrl', function($rootScope, $scope, $http, url) { // ProfesoresEditCtrl controller

    $scope.submit = function(){
        var newProfesor = {
            nombre: $scope.form.nombre,
            apellidos: $scope.form.apellidos,
            dni: $scope.form.dni,
            edad: $scope.form.edad,
            email: $scope.form.email,
            telefono: $scope.form.telefono,
            observaciones: $scope.form.observaciones
        };
        // Añadir profesor
        if ($scope.new == 1) {
            if ($rootScope.profesores.length > 0)
                newProfesor['id'] = $rootScope.profesores[$rootScope.profesores.length-1].id + 1;
            else
                newProfesor['id'] = 1;
            // TODO-1: Realizar Petición POST a la URL /profesores/
                // TODO-2: En caso de éxito, añadir (push) ese profesor al listado $rootScope.profesores

        }
        // Actualizar profesor
        else {
            newProfesor['id'] = $scope.form.id;

            var id = $scope.form.id;
            // TODO-1: Realizar Petición PUT a la URL /profesores/{id}
                // TODO-2: En caso de éxito, actualizar los datos de ese profesor en el listado $rootScope.profesores

        }
        $('#modalProfesoresForm').modal('hide');
    };

})
