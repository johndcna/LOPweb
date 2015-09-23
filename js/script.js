		var module = angular.module("LOPapp", ['ngRoute']);
        
        module.config( ['$routeProvider', function($routeProvider) {
            $routeProvider
            	.when('/',{
            		templateUrl:'main/login.html',
            		controller: 'LoginController'
            	})
            	.when('/main',{
            		templateUrl:'main/main.html',
            		controller: 'LoginController'
            	})
            	.otherwise({
                   	redirectTo: '/'
                });
            }]);


        var myController = module.controller("LoginController", function($scope,$http) {
        
	        $scope.myData = {};
				
			$scope.login = function() {
				alert("click");
			};

			$scope.myData.doClick = function(item, event) {

	        		var responsePromise = $http.get("json-test-data.json");

	        		responsePromise.success(function(data, status, headers, config) {
	           				if (typeof(Storage) !== "undefined") {
	 							// Store
	    						localStorage.setItem("jsonLogin", JSON.stringify(data));
	    						window.location.href = "#/main";
	    						alert("sud");
							} else {
	  							alert("not supported");
							}
	            	});
	                responsePromise.error(function(data, status, headers, config) {
	                    alert("AJAX failed!");
	                });
        	}
    	});
            