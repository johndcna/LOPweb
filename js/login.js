var module       = angular.module("LOPapp", []);
        var myController = module.controller("myController", function($scope,$http) {
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
						} else {
  						   alert("not supported");
						}

						window.location.href = "main/main.html";
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!");
                });
            }

        });
/*
    				// Retrieve
    					var x =JSON.parse(localStorage.getItem("jsonLogin"));
    						alert("title: "+x.title);
*/