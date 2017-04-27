angular.module('myApp.alumnos')

// Realizar un controlador por cada acción y colocarlo dentro de cada carpeta
.controller("AlumnosListCtrl", function($scope, $http, url) {

//$scope.alumnos = indexService.list();

    // Cuando se cargue la página, realizar consulta para recuperar el listado de alumnos
    $http.get(url + 'alumnos')
        .then(function(response) {
            $scope.alumnos = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

    $scope.showAdd = function(){
//console.log('Inicio del método add de alumnos');
        $scope.send = false;
        $scope.form = {
            nombre: '',
            dni: '',
            fecha_nacimiento: '',
            email: '',
            telefono: '',
            direccion: ''
        };
        $scope.new = 1;
        $('#modalAlumnosForm').modal('show');
    };

    $scope.showEdit = function(id){
//console.log('Inicio del método edit de alumnos');
        $http.get(url + 'alumnos/'+id).
            then(function(response) {
                $scope.form = response.data;
            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
        $scope.new = 0;
        $scope.id = id;
        $('#modalAlumnosForm').modal('show');
    }

    $scope.submit = function(){
//console.log('Inicio del método submit de alumnos');
        $scope.send = true;
        if ($scope.new == 1) {
            // Añadir alumno
            var newAlumno = {
                nombre: $scope.form.nombre,
                apellidos: $scope.form.apellidos,
                dni: $scope.form.dni,
                fecha_nacimiento: $scope.form.fecha_nacimiento,
                email: $scope.form.email,
                telefono: $scope.form.telefono,
                direccion: $scope.form.direccion
            };
            $http.post(url + 'alumnos', newAlumno)
                .then(function(response) {
                    // Refrescar listado de alumnos, incluido el alumno añadido
                    $http.get(url + 'alumnos')
                        .then(function(response) {
                            $scope.alumnos = response.data;
                        }, function(response) {
                            $scope.notice = response.status + " " + response.data.error;
                        });

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        } else {
            var newAlumno = {
                nombre: $scope.form.nombre,
                apellidos: $scope.form.apellidos,
                dni: $scope.form.dni,
                fecha_nacimiento: $scope.form.fecha_nacimiento,
                email: $scope.form.email,
                telefono: $scope.form.telefono,
                direccion: $scope.form.direccion
            };

            var id = $scope.id;
            $http.put(url + 'alumnos/'+id, newAlumno) // $http.put(url + 'alumnos/'+id+'/update', newAlumno)
                .then(function(response) {
                    // Refrescar listado de alumnos, con los datos del alumno actualizados
                    $http.get(url + 'alumnos')
                        .then(function(response) {
                            $scope.alumnos = response.data;
                        }, function(response) {
                            $scope.notice = response.status + " " + response.data.error;
                        });

                }, function(response) {
                    $scope.notice = response.status + " " + response.data.error;
                });
        }
        $('#modalAlumnosForm').modal('hide');
    };

    $scope.showDelete = function(id) {
        //$('#modalAlumnosDelete').modal('show');
        $http.get(url + 'alumnos/'+id). //http.get(url + 'alumnos/'+id+'/delete').
            then(function(response) {
                $scope.deleteAlumno = response.data;
            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
    };

    $scope.delete = function(/*id*/) {

        $http.delete(url + 'alumnos/'+$scope.deleteAlumno.id). //http.get(url + 'alumnos/'+id+'/delete').
            then(function(response) {
                // Recuperar el listado de alumnos después de eliminar uno
                $http.get(url + 'alumnos')
                    .then(function(response) {
                        $scope.alumnos = response.data;
                    }, function(response) {
                        $scope.notice = response.status + " " + response.data.error;
                    });
                console.log('Alumno '+$scope.deleteAlumno.id+' borrado satisfactoriamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
        $('#modalAlumnosDelete').modal('hide'); // Cerrar ventana modal de eliminar
    };
})

.controller('AlumnosEditCtrl', function($scope, $http, url) { // AlumnosEditCtrl controller

})
.controller('AlumnosDeleteCtrl', function($scope, $http, url) { // AlumnosDeleteCtrl controller

})
.controller('AlumnosAddCtrl', function($scope, $http, url) { // AlumnosAddCtrl controller

})
