angular.module('myApp.usuarios')

.controller('UsuariosLoginCtrl', function($rootScope, $scope, $http, $routeParams, url) { // UsuariosLoginCtrl controller

	$scope.success = false;
	$scope.error = false;

	$scope.submit = function() {
      $http.get(url + 'usuarios/emails/'+$scope.email+'/passwords/'+$scope.password).
        then(function(response) {

			if (!$.isEmptyObject(response.data)) {
				$scope.success = true;
				$scope.error = false;
				$scope.currUsuario = response.data;
				$rootScope.autenticado = 1;
			} else {
				$scope.error = true;
				$scope.success = false;
			}
          
        }, function(response) {
          $scope.notice = response.status + " " + response.data.error;
        });

	};
});
