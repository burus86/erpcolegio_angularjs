angular.module('myApp.usuarios')

.controller('UsuariosRegisterCtrl', function($rootScope, $scope, $http, url) { // UsuariosRegisterCtrl controller

	$scope.submit = function() {

        var newUsuario = {
            usuario: $scope.form.usuario,
            email: $scope.form.email,
            password: $scope.form.password,
            rol: $scope.form.rol
        };

        if ($rootScope.usuarios.length > 0) newUsuario['id'] = $rootScope.usuarios[$rootScope.usuarios.length-1].id + 1;
        else newUsuario['id'] = 1;

        $http.post(url + 'usuarios', newUsuario)
            .then(function(response) {

                $rootScope.usuarios.push(newUsuario);
                $scope.newUsuario = newUsuario;
				$rootScope.autenticado = 1;
                console.log('El usuario con id = "'+newUsuario['id']+'" y credenciales de acceso = "'+newUsuario.email + ' : ' + newUsuario.password+'" fue añadido correctamente');

            }, function(response) {
                $scope.notice = response.status + " " + response.data.error;
            });

	};
});
