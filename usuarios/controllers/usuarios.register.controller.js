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

        // TODO-1: Realizar Petición POST a la URL /usuarios
            // TODO-2: En caso de éxito 
            //      añadir el usuario al array $rootScope.usuarios
            //      guardar en $scope.newUsuario el objeto de tipo usuario creado
            //      guardar en $rootScope.autenticado el valor 1
            //      mostrar mensaje en console.log para asegurarnos de que funciona

	};
});
