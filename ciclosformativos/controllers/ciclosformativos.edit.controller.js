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
            $http.post(url + 'ciclosformativos', newCicloFormativo, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            })
                .then(function(response) {

                    $rootScope.ciclosformativos.push(newCicloFormativo);
                    console.log('El ciclo con id = "'+newCicloFormativo['id']+'", referencia = "'+newCicloFormativo.referencia +' y nombre: '+newCicloFormativo.nombre+'" fue añadido correctamente');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        }
        // Actualizar cicloformativo
        else {
            newCicloFormativo['id'] = $scope.form.id;

            var id = $scope.form.id;
            $http.put(url + 'ciclosformativos/'+id, newCicloFormativo)
                .then(function(response) {

                    angular.forEach($rootScope.ciclosformativos, function(item, key) {
                        if (item.id == id) {
                            // Actualiza el contenido del array de alumnos para la posición key
                            $rootScope.ciclos[key] = newCicloFormativo;
                        }
                    });
                    console.log('El ciclo con id = "'+newCicloFormativo['id']+'", referencia = "'+newCicloFormativo.referencia +' y nombre: '+newCicloFormativo.nombre+'" fue actualizado correctamente');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
            // TODO-1: Realizar Petición PUT a la URL /ciclosformativos/{id}
                // TODO-2: En caso de éxito, actualizar los datos de ese ciclo en el listado $rootScope.ciclosformativos

        }
        $('#modalCiclosFormativosForm').modal('hide');
    };

})
