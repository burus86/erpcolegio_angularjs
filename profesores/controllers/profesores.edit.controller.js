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
            $http.post(url + 'profesores', newProfesor)
                .then(function(response) {
                    console.log('newprofesor sin erro');
                    $rootScope.profesores.push(newProfesor);
                    console.log('El profesor con id = "'+newProfesor['id']+'" y nombre = "'+newProfesor.nombre+' '+newProfesor.apellidos+'" fue añadido correctamente');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });

        }
        // Actualizar profesor
        else {
            newProfesor['id'] = $scope.form.id;

            var id = $scope.form.id;
            // TODO-1: Realizar Petición PUT a la URL /profesores/{id}
            // TODO-2: En caso de éxito, actualizar os datos dese profesor no listado $rootScope.profesores
            $http.put(url + 'profesores/'+id, newProfesor)
                .then(function(response) {

                    angular.forEach($rootScope.profesores, function(item, key) {
                        if (item.id == id) {
                            // Actualiza o contido do arrai de profesores para a posición key
                            $rootScope.profesores[key] = newProfesor;
                        }
                    });
                    console.log('El profesor con id = "'+$scope.form.id+'" y nombre = "'+$scope.form.nombre+' '+$scope.form.apellidos+'" fue actualizado correctamente :)');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        }
        $('#modalProfesoresForm').modal('hide');
    };

})
