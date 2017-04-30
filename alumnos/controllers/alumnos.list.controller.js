angular.module('myApp.alumnos')

.run(function($rootScope, $http, url) {

    $rootScope.alumnos = [];
    
    // Al cargarse la página, realiza automáticamente la petición GET para recuperar el listado de alumnos
    $http.get(url + 'alumnos')
        .then(function(response) {
            $rootScope.alumnos = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})

.controller("AlumnosListCtrl", function($rootScope, $scope, $http, url) { // AlumnosListCtrl controller

    // Busca en el array $rootScope.alumnos por el id y devuelve el correspondiente objeto y su posición
    $scope.getAlumno = function(id){
        var alumno = {};
        angular.forEach($rootScope.alumnos, function(item, key) {
            if (item.id == id) {
                alumno = item;
                //alumno['position'] = key; // Almacena la posición del objeto cuyo id se pasa como argumento
            }
        });
        return alumno;
    };

    $scope.showAdd = function(){
        $scope.form = {};
        $scope.new = 1;
    };

    $scope.showEdit = function(id){
        var alumno = $scope.getAlumno(id);
        $scope.form = {
            id: alumno.id,
            nombre: alumno.nombre,
            apellidos: alumno.apellidos,
            dni: alumno.dni,
            fecha_nacimiento: alumno.fecha_nacimiento,
            email: alumno.email,
            telefono: alumno.telefono,
            direccion: alumno.direccion
        };
        $scope.new = 0;
    }

    $scope.showDelete = function(id) {
        $scope.deleteAlumno = $scope.getAlumno(id);
    };

})

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

.controller('AlumnosDeleteCtrl', function($rootScope, $scope, $http, url) { // AlumnosDeleteCtrl controller

    $scope.delete = function() {

        $http.delete(url + 'alumnos/'+$scope.deleteAlumno.id). //http.get(url + 'alumnos/'+id+'/delete').
            then(function(response) {
                
                angular.forEach($rootScope.alumnos, function(item, key) {
                    if (item.id == $scope.deleteAlumno.id) 
                        $rootScope.alumnos.splice(key, 1);
                });
                console.log('El alumno con id = "'+$scope.deleteAlumno.id+'" y nombre = "'+$scope.deleteAlumno.nombre+' '+$scope.deleteAlumno.apellidos+'" ha sido borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
        $('#modalAlumnosDelete').modal('hide');
    };

})
