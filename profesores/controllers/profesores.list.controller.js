angular.module('myApp.profesores')

.controller("ProfesoresListCtrl", function($rootScope, $scope, $http, url) { // ProfesoresListCtrl controller

    // Busca en el array $rootScope.profesores por el id y devuelve el correspondiente objeto y su posición
    $scope.getProfesor = function(id){
        var profesor = {};
        angular.forEach($rootScope.profesores, function(item, key) {
            if (item.id == id) {
                profesor = item;
                //profesor['position'] = key; // Almacena la posición del objeto cuyo id se pasa como argumento
            }
        });
        return profesor;
    };

    $scope.showAdd = function(){
        // TODO: Pasarle $scope.form y $scope.new a la ventana modal

    };

    $scope.showEdit = function(id){
        var profesor = $scope.getProfesor(id);
        // TODO: Pasarle $scope.form y $scope.new a la ventana modal

    }

    $scope.showDelete = function(id) {
        // TODO: Guardar en $scope.deleteProfesor los datos del profesor con ese id

    };

})
