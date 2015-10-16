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
							
		           					var data =  {
		           						username : $scope.username,
		           						password : $scope.password
		           					};
		           					$rootScope.ip = "192.168.43.10";
											var prom = $http.post("http://"+$rootScope.ip+":8080/InformatronYX/informatron/user/login",JSON.stringify(data));
											prom.success(function(response){
												if(response.token != null) {
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
											});
											prom.error(function (response){
												alert(response);
											});
								/*			var responsePromise = $http.get("json-test-data.json");
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
						*/
	        	}
        	}

        	controllers.TaskbarController = function($scope,$http,$rootScope){
        		$scope.data = JSON.parse(localStorage.getItem("jsonLogin"));
        		$scope.name = $scope.data.username;
        		$scope.flag;
        		$scope.pagingFlag;
        		$rootScope.ip = "192.168.43.10";
		        $scope.pageLength;
				$scope.arr = [];
				$scope.currentSequence;
				$scope.currentId;

        		$scope.showLO = function() {
					if($scope.flag == true){
						$scope.flag = false;
					}else{
						$scope.flag = true;
					}
				}

				$scope.showPaging = function(){

					if($scope.pagingFlag == true){
						$scope.pagingFlag = false;

					}else{
						$scope.pagingFlag = true;
					}
					alert('nisulod ' + $scope.pagingFlag);
				}

				$scope.displayLO = function(liableLearningObjects, LOid, page){
					//alert(""+LOid);// ng-include="main.html"
					var sequence;
					var fileName;
					var fileExtension;
					$scope.arr = [];
					$scope.currentSequence = liableLearningObjects;
					$scope.currentId = LOid;
					$("#mainDiv").empty();

					$scope.pagingFlag = true;
					

					$.each($scope.currentSequence, function(a,b){
						if($scope.currentId == b.id){
							sequence = b.sequence;
							$("#mainDiv").append("<h1>"+b.title+"</h1>");
							$("#mainDiv").append("<h3>"+b.description+"</h3>");
							$("#mainDiv").append("<br><br><br>");
						}
					});
					
					$.each(sequence, function(a,b)
					{
						$scope.arr.push(a+1);
						$.each(b, function(c,d)
						{
							if(page == a){
								fileName = d.id;
								fileExtension = d.fileExtension;
								if(d.type == "text")
								{
									$("#mainDiv").append("<object width='500' height='300' type='text/plain' data='le/"+fileName+fileExtension+"' border='0'>");
								}
								else if(d.type == "picture")
								{
									$("#mainDiv").append("<img src='le/"+fileName+fileExtension+"' alt='Mountain View'>");
								}
								else if(d.type == "audio")
								{
									$("#mainDiv").append("<audio controls><source src='le/"+fileName+fileExtension+"' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
								}
								else if(d.type == "video")
								{
									$("#mainDiv").append("<video width='320' height='240' controls><source src='le/"+fileName+fileExtension+"' type='video/mp4'>Your browser does not support the video tag.</video>");
								}
								$("#mainDiv").append("<br><br><br><br>");
							}
						});
					});
					//alert($scope.arr.length);
					$scope.pageLength = arr.length;
					$scope.$apply();
					/*$.each(page, function(a,le)
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
					});*/
				}

				$scope.hey = function(){
					alert($scope.pageLength);
				}
				$scope.goToStore = function() {

					var win = window.open("http://"+$rootScope.ip+":8080/InformatronYX/store/home", '_blank');
						if(win){
						    //Browser has allowed it to be opened
						    win.focus();
						}else{
						    //Broswer has blocked it
						    alert('Please allow popups for this site');
						}
				}
        	
	        	$scope.goToLORI = function(id,learningObjectId,subject,loris,reviewId) {
	        		var info = JSON.stringify({
								ip: $rootScope.ip,
								id:id, 
								learningObjectId: learningObjectId, 
								subject: subject,
								loris: loris,
								reviewId: reviewId
							});
									localStorage["information"] = info;
						var win = window.open("/lori/lori.html", '_blank');
							if(win){
							    //Browser has allowed it to be opened
							    win.focus();
							}else{
							    //Broswer has blocked it
							    alert('Please allow popups for this site');
							}
				}
				$scope.goToQuiz = function(id,loid,loname,losubject,userName,userid) {
							var info = JSON.stringify({
								ip: $rootScope.ip,
								id:id, 
								lo_id: loid, 
								lo_name: loname,
								lo_subject:losubject,
								username:userName,
								user_id:userid
							});
									localStorage["information"] = info;
									var win = window.open("/quiz/index.html", '_blank');
							if(win){
							    //Browser has allowed it to be opened
							    win.focus();
							}else{
							    //Broswer has blocked it
							    alert('Please allow popups for this site');
							}

						}
				$scope.goToDownload = function(test) {
					window.location.href = "http://"+$rootScope.ip+":8080/InformatronYX/informatron/connect/download/test/"+test+".png";
				}

        	}
		module.controller(controllers); 


		/* // download <a href="/images/myw3schoolsimage.jpg" download>
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
/*
 $.ajax({
			url: "http://"+info.ip+":8080/InformatronYX/informatron/quiz/submit",
			type: 'post',
			data: JSON.stringify(jsonData),	
			dataType: 'json',
			success: function(data, status, jqXHR){
				alert("Sent!");
			},
			error: function(jqXHR, status, error) {
				alert("Failed to submit");
			}
		});
		*/

		/*
$.ajax({
    url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
    data: myData,
    type: 'GET',
    crossDomain: true, // enable this
    dataType: 'jsonp',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});



//2
his is a CORS issue. There are some settings you can change in angular - these are the ones I typically set in the Angular .config method (not all are related to CORS):

$httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";


//3
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

//4
"C:\Program Files\Google\Chrome\Application\chrome.exe" --args --disable-web-security

//5
   res.header("Access-Control-Allow-Origin", "*");

   //6
   <script type="text/javascript">
// Using jQuery
$.get("http://www.example.org/ajax.php").done(function (data) {
    console.log(data);
});

// Using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.example.org/ajax.php", true);
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();
</script>
		*/