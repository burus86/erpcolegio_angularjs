angular.module('myApp.alumnos')

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
