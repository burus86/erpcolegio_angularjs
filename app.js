'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.alumnos',
	/*'myApp.profesores',
	'myApp.ciclosformativos',
	'myApp.asignaturas',
	'myApp.login',
	'myApp.home',*/
	'myApp.participantes'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	//$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/'}); //'/login'
}])
.value('url', 'http://localhost/lumen/public/api/v1/') // FIXME: http://{ip_ies-sanclemente}/lumen/public/api/v1/

/*.directive('tooltip', function() { // FIXME: Mostrar tooltips al cargar AngularJS
	return {
		restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
	};
});*/
