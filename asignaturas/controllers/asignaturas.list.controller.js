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
        $scope.form = {};
        $scope.new = 1;
    };

    $scope.showEdit = function(id){
        var asignatura = $scope.getAsignatura(id);
        // TODO: Pasarle $scope.form y $scope.new a la ventana modal
        $scope.form = {
            id: asignatura.id,
            id_ciclo_formativo: asignatura.id_ciclo_formativo,
            id_profesor: asignatura.id_profesor,
            codigo: asignatura.codigo,
            nombre: asignatura.nombre,
            curso: asignatura.curso,
            horas_semana: asignatura.horas_semana,
            horas_totales: asignatura.horas_totales,
            creditos: asignatura.creditos
        };
        $scope.new = 0;

    }

    $scope.showDelete = function(id) {
        // TODO: Guardar en $scope.deleteAsignatura los datos de la asignatura con ese id
        $scope.deleteAsignatura = $scope.getAsignatura(id);
    };

})
