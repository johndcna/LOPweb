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
                });//http://+$rootScope.ip+:8080/InformatronYX/store/home
        }]);

        var controllers = {}; 
 			
 			controllers.LoginController = function($scope,$http,$rootScope) {
        
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
		           					$rootScope.ip = "192.168.254.102";
		           						
		           					//var responsePromise =  $http.post("http://"+$rootScope.ip+":8080/InformatronYX/informatron/user/login",inputData);//http://192.168.254.101:8080/InformatronYX/informatron/user/login
									var responsePromise =  $http.post("http://posttestserver.com/post.php",inputData);
										responsePromise.success(function(data, status, header, config){
											/*if(response.token !=null) {
													if (typeof(Storage) !== "undefined") {
			 											// Store
			    										localStorage.setItem("jsonLogin", JSON.stringify(response));
			    										window.location.href = "#/main";
													} 
													else {
			  											alert("not supported");
													}
											}
											else {
													alert("Invalid username or password.");
											}
			    										console.log(data);
										});
										 responsePromise.error(function(response) {
					                   		alert("AJAX failed!");
					                		});
	$.ajax({
          type: 'POST',
          url: "http://"+$rootScope.ip+":8080/InformatronYX/informatron/user/login",
          processData: true,
          data: inputData,
          dataType: "json",
          success: function (data) { alert("e"); },
			error: function (data) { alert("error"); }
          });*/
								
		        		var responsePromise = $http.get("json-test-data.json");
		        		responsePromise.success(function(data, status, headers, config) {
		           				if(data.token !=null) {
									if (typeof(Storage) !== "undefined") {
		 							// Store
		 							localStorage.clear();
		    						//localStorage.setItem("jsonLogin", JSON.stringify(data));
		    						localStorage["jsonLogin"] = JSON.stringify(data);
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

        	controllers.TaskbarController = function($scope,$http,$rootScope){
        		$scope.data = JSON.parse(localStorage.getItem("jsonLogin"));
        		$scope.name = $scope.data.username;
        		$scope.flag;
        		$rootScope.ip = "";
        		$scope.showLO = function() {
					if($scope.flag == true){
						$scope.flag = false;
					}else{
						$scope.flag = true;
					}
				}
				$scope.displayLO = function(liableLearningObjects, LOid){
					//alert(""+LOid);// ng-include="main.html"
					var sequence;
					var fileName;
					var fileExtension;
					$("#mainDiv").empty();
					

					$.each(liableLearningObjects, function(a,b){
						if(LOid == b.id){
							sequence = b.sequence;
							$("#mainDiv").append("<h1>"+b.title+"</h1>");
							$("#mainDiv").append("<h3>"+b.description+"</h3>");
							$("#mainDiv").append("<br><br><br>");
						}
					});
					
					$.each(sequence, function(a,le)
					{
						fileName = le.id;
						fileExtension = le.fileExtension;
						if(le.type == "text")
						{
							$("#mainDiv").append("<object width='500' height='300' type='text/plain' data='le/"+fileName+fileExtension+"' border='0'>");
						}
						else if(le.type == "picture")
						{
							$("#mainDiv").append("<img src='le/"+fileName+fileExtension+"' alt='Mountain View'>");
						}
						else if(le.type == "audio")
						{
							$("#mainDiv").append("<audio controls><source src='le/"+fileName+fileExtension+"' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
						}
						else if(le.type == "video")
						{
							$("#mainDiv").append("<video width='320' height='240' controls><source src='le/"+fileName+fileExtension+"' type='video/mp4'>Your browser does not support the video tag.</video>");
						}
						$("#mainDiv").append("<br>");
					});
				}
				$scope.goToStore = function() {
					$rootScope.ip = "192.168.254.102";//http://192.168.254.102:8080/InformatronYX/store/home
					var win = window.open("http://"+$rootScope.ip+":8080/InformatronYX/store/home", '_blank');
						if(win){
						    //Browser has allowed it to be opened
						    win.focus();
						}else{
						    //Broswer has blocked it
						    alert('Please allow popups for this site');
						}
										}
        	
        	$scope.goToLORI = function() {
					var win = window.open("/lori/LORI.html", '_blank');
						if(win){
						    //Browser has allowed it to be opened
						    win.focus();
						}else{
						    //Broswer has blocked it
						    alert('Please allow popups for this site');
						}
			}
			}

        	
		module.controller(controllers); 

		/*
if ($.browser.msie && window.XDomainRequest) {
    // Use Microsoft XDR
    var xdr = new XDomainRequest();
    xdr.open("get", "someurl");
    xdr.onload = function () {
    var JSON = $.parseJSON(xdr.responseText);
    if (JSON == null || typeof (JSON) == 'undefined')
    {
        JSON = $.parseJSON(data.firstChild.textContent);
    }
    processData(JSON);
    };
    xdr.send();
} else {
          $.ajax({
          type: 'GET',
          url: "someurl"l,
          processData: true,
          data: {},
          dataType: "json",
          success: function (data) { processData(data); }
          });
}
		

$.ajax({

    url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
    data: myData,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});



Chrome.exe --allow-file-access-from-files

chrome.exe --disable-web-security

request = new XDomainRequest();
request.open(method, url);
request.onload = function() {
  callback(req.responseText);
};
request.send(data);

chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

http://127.0.0.1/*
		*/

 