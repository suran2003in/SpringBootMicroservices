angular.module("racerApp", [ 'ngAnimate',
                             'ngCookies',
                             'ngResource',
                             'ngRoute',
                             'ngSanitize',
                             'ngTouch' ]).config(function($routeProvider) {
                            	 $routeProvider.when('/', {
                            		  templateUrl: 'views/main.html',
                            	      controller: 'mainController'
                            	 })
                            	 .when('/participants/:raceId', {
							    	  templateUrl: 'views/chollatech.html',
							    	  controller: 'chollaController'
							      })
                            	 .otherwise({
                            		 redirectTo:'/'
                            	 });
                             })