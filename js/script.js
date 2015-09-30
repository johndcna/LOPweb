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
							// for information
		           					/*var inputData =  {
		           						'username' : $scope.username,
		           						'password' : $scope.password
		           					};
		           					
		           					alert(inputData);
		        		 			var responsePromise =  $http.post("http://192.168.254.101:8080/InformatronYX/informatron/user/login",inputData);//http://192.168.254.101:8080/InformatronYX/informatron/user/login
										responsePromise.success(function(response) {
											if(response.token !=null) {
													if (typeof(Storage) !== "undefined") {
			 											// Store
			    										localStorage.setItem("jsonLogin", JSON.stringify(response));
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
										});
										 responsePromise.error(function(response) {
					                   		alert("AJAX failed!");
					                		});*/
		        		var responsePromise = $http.get("json-test-data.json");
		        		responsePromise.success(function(data, status, headers, config) {
		           				if(data.token !=null) {
									if (typeof(Storage) !== "undefined") {
		 							// Store
		 							localStorage.clear();
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
					if($scope.flag == true){
						$scope.flag = false;
					}else{
						$scope.flag = true;
					}
				}
				$scope.displayLO = function(LOsequence){
					//alert(""+LOid);// ng-include="main.html"
					var fileName;
					var fileExtension;
					$("#mainDiv").empty();

					$.each(LOsequence, function(a,le)
					{
						fileName = le.id;
						fileExtension = le.fileExtension;
						if(le.type == "text")
						{
							$("#mainDiv").append("<object width='300' height='300' type='text/plain' data='le/"+fileName+fileExtension+"' border='0'>");
						}
						else if(le.type == "picture")
						{
							$("#mainDiv").append("<img src='le/"+fileName+fileExtension+"' alt='Mountain View' style='width:304px;height:228px;'>");
						}
						else if(le.type == "video")
						{
							$("#mainDiv").append("<audio controls><source src='le/"+fileName+fileExtension+"' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
						}
						else if(le.type == "audio")
						{
							$("#mainDiv").append("<video width='320' height='240' controls><source src='le/"+fileName+fileExtension+"' type='video/mp4'>Your browser does not support the video tag.</video>");
						}
						$("#mainDiv").append("<br>");
					});
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

 