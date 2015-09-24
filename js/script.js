	var module = angular.module("LOPapp", ['ngRoute']);
        
        module.config( ['$routeProvider', function($routeProvider) {
            $routeProvider
            	.when('/',{
            		templateUrl:'main/login.html',
            		controller: 'LoginController'
            	})
            	.when('/main',{
            		templateUrl:'main/main.html',
            		controller: 'TaskbarController'
            	})
            	.otherwise({
                   	redirectTo: '/'
                });
        }]);

        var controllers = {}; 
 			
 			controllers.LoginController = function($scope,$http) {
        
		        $scope.myData = {};
					
				$scope.test = function() {
					alert("click");
				}

				$scope.myData.doClick = function(item, event) {
							/* for information
		           					var inputData = '{"username": "'+$scope.username+'", "password": "'+$scope.password+'"}';
		        		 			$http.post("InformatronYX/informatron/user/login",inputData);
										if(data.token !=null) {
												if (typeof(Storage) !== "undefined") {
		 											// Store
		    										localStorage.setItem("jsonLogin", JSON.stringify(data));
		    										window.location.href = "#/main";
		    										alert(str);
												} 
												else {
		  											alert("not supported");
												}
										}
										else {
												alert("Invalid username or password.");
										}
		           				*/
		        		var responsePromise = $http.get("json-test-data.json");
		        		responsePromise.success(function(data, status, headers, config) {
		           				if(data.token !=null) {
									if (typeof(Storage) !== "undefined") {
		 							// Store
		    						localStorage.setItem("jsonLogin", JSON.stringify(data));
		    							window.location.href = "#/main";
									} 
									else {
		  								alert("not supported");
									}
								}
								else {
									alert("Invalid username or password.");
								}
		            	});
		                responsePromise.error(function(data, status, headers, config) {
		                    alert("AJAX failed!");
		                });
	        	}
        	}

        	controllers.TaskbarController = function($scope,$http){
        		$scope.data = JSON.parse(localStorage.getItem("jsonLogin"));
        		$scope.name = $scope.data.username;
        		$scope.flag;

        		$scope.showLO = function() {
					//alert(" "+$scope.flag);
					if($scope.flag == true){
						$scope.flag = false;
					}else{
						$scope.flag = true;
					}
				}
				$scope.displayLO = function(LOid){
					alert(""+LOid);// ng-include="main.html"
					$("#mainDiv").prop("ng-include","main.html");
				}

        	}
		module.controller(controllers); 

		/*
var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};npm install -g browserify
		*/

 