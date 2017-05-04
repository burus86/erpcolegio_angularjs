angular.module('myApp.ciclosformativos')

.controller("CiclosFormativosListCtrl", function($rootScope, $scope, $http, url) { // CiclosFormativosListCtrl controller

    // Busca en el array $rootScope.ciclosformativos por el id y devuelve el correspondiente objeto y su posición
    $scope.getCicloFormativo = function(id){
        var cicloformativo = {};
        angular.forEach($rootScope.ciclosformativos, function(item, key) {
            if (item.id == id) {
                cicloformativo = item;
                //cicloformativo['position'] = key; // Almacena la posición del objeto cuyo id se pasa como argumento
            }
        });
        return cicloformativo;
    };

    $scope.showAdd = function(){
        $scope.form = {};
        $scope.new = 1;
    };


    $scope.showEdit = function(id){
        var ciclo = $scope.getCicloFormativo(id);
        $scope.form = {
            id: ciclo.id,
            referencia: ciclo.referencia,
            nombre: ciclo.nombre,
            nivel: ciclo.nivel,
            duracion: ciclo.duracion,
            familia_profesional: ciclo.familia_profesional,
        };
        $scope.new = 0;

    }

    $scope.showDelete = function(id) {
        // TODO: Guardar en $scope.deleteCicloFormativo los datos del ciclo con ese id

    };

})
