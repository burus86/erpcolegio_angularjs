angular.module('myApp.alumnos')

.controller('AlumnosEditCtrl', function($rootScope, $scope, $http, url) { // AlumnosEditCtrl controller

    $scope.submit = function(){
        var newAlumno = {
            nombre: $scope.form.nombre,
            apellidos: $scope.form.apellidos,
            dni: $scope.form.dni,
            fecha_nacimiento: $scope.form.fecha_nacimiento,
            email: $scope.form.email,
            telefono: $scope.form.telefono,
            direccion: $scope.form.direccion
        };
        // Añadir alumno
        if ($scope.new == 1) {
            if ($rootScope.alumnos.length > 0)
                newAlumno['id'] = $rootScope.alumnos[$rootScope.alumnos.length-1].id + 1;
            else
                newAlumno['id'] = 1;
            $http.post(url + 'alumnos', newAlumno)
                .then(function(response) {

                    $rootScope.alumnos.push(newAlumno);
                    console.log('El alumno con id = "'+newAlumno['id']+'" y nombre = "'+newAlumno.nombre+' '+newAlumno.apellidos+'" fue añadido correctamente');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        }
        // Actualizar alumno
        else {
            newAlumno['id'] = $scope.form.id;

            var id = $scope.form.id;
            $http.put(url + 'alumnos/'+id, newAlumno)
                .then(function(response) {

                    angular.forEach($rootScope.alumnos, function(item, key) {
                        if (item.id == id) {
                            // Actualiza el contenido del array de alumnos para la posición key
                            $rootScope.alumnos[key] = newAlumno;
                        }
                    });
                    console.log('El alumno con id = "'+$scope.form.id+'" y nombre = "'+$scope.form.nombre+' '+$scope.form.apellidos+'" fue actualizado correctamente');

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        }
        $('#modalAlumnosForm').modal('hide');
    };

})
