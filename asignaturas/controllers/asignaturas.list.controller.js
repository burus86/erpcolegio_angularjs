angular.module('myApp.asignaturas')

.controller("AsignaturasListCtrl", function($rootScope, $scope, $http, url) { // AsignaturasListCtrl controller

    // Busca en el array $rootScope.asignaturas por el id y devuelve el correspondiente objeto y su posición
    $scope.getAsignatura = function(id){
        var asignatura = {};
        angular.forEach($rootScope.asignaturas, function(item, key) {
            if (item.id == id) {
                asignatura = item;
                //asignatura['position'] = key; // Almacena la posición del objeto cuyo id se pasa como argumento
            }
        });
        return asignatura;
    };

    $scope.showAdd = function(){
        // TODO: Pasarle $scope.form y $scope.new a la ventana modal

    };

    $scope.showEdit = function(id){
        var asignatura = $scope.getAsignatura(id);
        // TODO: Pasarle $scope.form y $scope.new a la ventana modal

    }

    $scope.showDelete = function(id) {
        // TODO: Guardar en $scope.deleteAsignatura los datos de la asignatura con ese id

    };

})
