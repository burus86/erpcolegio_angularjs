angular.module('myApp.asignaturas')

.controller('AsignaturasEditCtrl', function($rootScope, $scope, $http, url) { // AsignaturasEditCtrl controller

    $scope.submit = function(){
        var newAsignatura = {
            id_ciclo_formativo: $scope.form.id_ciclo_formativo,
            id_profesor: $scope.form.id_profesor,
            codigo: $scope.form.codigo,
            nombre: $scope.form.nombre,
            curso: $scope.form.curso,
            horas_semana: $scope.form.horas_semana,
            horas_totales: $scope.form.horas_totales,
            creditos: $scope.form.creditos
        };
        // Añadir asignatura
        if ($scope.new == 1) {
            if ($rootScope.asignaturas.length > 0)
                newAsignatura['id'] = $rootScope.asignaturas[$rootScope.asignaturas.length-1].id + 1;
            else
                newAsignatura['id'] = 1;
            // TODO-1: Realizar Petición POST a la URL /asignaturas/
            newAsignatura['id'] = 1;
            $http.post(url + 'asignatura', newAsignatura, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            .then(function(response) {

                $rootScope.asignaturas.push(newAsignatura);
                console.log('La asignatura con id = "'+newAsignatura['id']+'" y nombre = "'+newAsignatura.nombre+' '+newAsignatura.codigo+'" fue añadida correctamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
                // TODO-2: En caso de éxito, añadir (push) esa asignatura al listado $rootScope.asignaturas

            }
        // Actualizar asignatura
        else {
            newAsignatura['id'] = $scope.form.id;

            var id = $scope.form.id;
            $http.put(url + 'asignaturas/'+id, newAsignatura)
            .then(function(response) {

                angular.forEach($rootScope.asignaturas, function(item, key) {
                    if (item.id == id) {
                            // Actualiza el contenido del array de asignaturas para la posición key
                            $rootScope.asignaturas[key] = newAsignatura;
                        }
                    });
                console.log('La asignatura con id = "'+$scope.form.id+'" y nombre = "'+$scope.form.nombre+' '+$scope.form.codigo+'" fue actualizada correctamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });
            // TODO-1: Realizar Petición PUT a la URL /asignaturas/{id}
                // TODO-2: En caso de éxito, actualizar los datos de esa asignatura en el listado $rootScope.asignaturas

            }
            $('#modalAsignaturasForm').modal('hide');
        };

    })
