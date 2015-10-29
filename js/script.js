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
 			
 			controllers.LoginController = function($scope,$http,$rootScope) {
        
		        $scope.myData = {};
		        $scope.status = "Online";
				$scope.downloadJSON = function(filename, text) {
					var element = document.createElement('a');
					  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
					  element.setAttribute('download', filename);

					  element.style.display = 'none';
					  document.body.appendChild(element);

					  element.click();

					  document.body.removeChild(element);
				}

				$scope.myData.doClick = function(item, event) {
							// for information
									$rootScope.ip = "192.168.254.104";
		           					$rootScope.port = "8080";
		           					/*if($scope.status == 'Online'){	
				           					var data =  {
				           						username : $scope.username,
				           						password : $scope.password
				           					};		
													var prom = $http.post("http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/user/login",JSON.stringify(data));
													prom.success(function(response){
														if(response.token != null) {
															if (typeof(Storage) !== "undefined") {
					 											// Store
					    										localStorage.setItem("jsonLogin", JSON.stringify(response));
					    										window.location.href = "#/main";
					    										console.log(JSON.stringify(response));
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
									}
									else {
											var loc = "le/"+$scope.userid+".json";
											var responsePromise = $http.get(loc);
											responsePromise.success(function(data, status, headers, config) {
							         				if(data.token !=null) {
														if (typeof(Storage) !== "undefined") {
							 							// Store
							 							localStorage.clear();
							 							localStorage["LoginStatus"] = $scope.status;
							    						localStorage["jsonLogin"] = JSON.stringify(data);
							    								if($scope.status=='Online'){	    												
								    								$scope.downloadJSON(data.id+'.json',JSON.stringify(data));
								    							}
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
							                    alert("ID not found!");
							                });          
									}*/
									//end for informatron 

									//start local test
						if($scope.status == 'Online'){				
							var responsePromise = $http.get("json-test-data.json");
			        		responsePromise.success(function(data, status, headers, config) {
			         				if(data.token !=null) {
										if (typeof(Storage) !== "undefined") {
			 							// Store
			 							localStorage.clear();
			 							localStorage["LoginStatus"] = $scope.status;
			    						localStorage["jsonLogin"] = JSON.stringify(data);
			    								if($scope.status=='Online'){	    												
				    								$scope.downloadJSON(data.id+'.json',JSON.stringify(data));
				    							}
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
						else {
							var loc = "le/"+$scope.userid+".json";
							var responsePromise = $http.get(loc);
							responsePromise.success(function(data, status, headers, config) {
			         				if(data.token !=null) {
										if (typeof(Storage) !== "undefined") {
			 							// Store
			 							localStorage.clear();
			 							localStorage["LoginStatus"] = $scope.status;
			    						localStorage["jsonLogin"] = JSON.stringify(data);
			    								if($scope.status=='Online'){	    												
				    								$scope.downloadJSON(data.id+'.json',JSON.stringify(data));
				    							}
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
			                    alert("ID not found!");
			                });      
						}
						//end local test
	        	}
        	}

        	controllers.TaskbarController = function($scope,$http,$rootScope){
        		$scope.data = JSON.parse(localStorage.getItem("jsonLogin"));
        		$scope.status = localStorage.getItem("LoginStatus");
        		$scope.name = $scope.data.username;
        		$scope.playlist;
        		$scope.flag;
        		$scope.pagingFlag;
        		$scope.playlistFlag = false;
        		$scope.selectedPlaylistFlag = false;
        		$scope.showPlaylistFlag;
        		$rootScope.ip = "192.168.254.104";
		        $rootScope.port = "8080";
		        $scope.pageLength;
				$scope.arr = [];
				$scope.currentSequence;
				$scope.currentId;
				$scope.currentPlaylist = [];
				$scope.playlistLOs = [];

				$.getJSON('playlist.json', function(data) {
  					//console.log(data);
  					$scope.playlist = data;
				});

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
					$scope.pagingFlag = true;//id,loid,loname,losubject,userName,userid
					$scope.jsonLogin = JSON.parse(localStorage.getItem("jsonLogin"));
					$scope.quizID;
					$scope.quizLOID;
					$scope.quizLONAME;
					$scope.quizLOSUBJECT;
					$scope.quizUSERNAME;
					$scope.quizUSERID;
					$scope.playlistFlag = false;
        			$scope.selectedPlaylistFlag = false;
        			console.log($scope.jsonLogin);
					$.each($scope.currentSequence, function(a,b){
						if($scope.currentId == b.id){
							sequence = b.sequence;
							$("#mainDiv").append("<h1>"+b.title+"</h1>");
							$("#mainDiv").append("<h3>"+b.description+"</h3>");
							$("#mainDiv").append("<br><br><br>");
							$scope.quizLOID = b.id;
							$scope.quizLONAME = b.title;
							$scope.quizLOSUBJECT = b.subject;
							$scope.quizUSERNAME = $scope.jsonLogin.username;
							$scope.quizUSERID  = $scope.jsonLogin.id;
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
								else if(d.type == "image")
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
								/*
								if(d.type == "text")
								{
									var txtFile ="le/"+fileName+fileExtension;
									$.get(txtFile).
									    done(function(data) {
									         $("#mainDiv").append("<object width='500' height='300' type='text/plain' data="+txtFile+" border='0'>");	
									    	 $("#mainDiv").append("<br>");
									    }).
									    fail(function() {
									        var textDownload = "http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/connect/download/le/"+$scope.quizUSERID+"/"+$scope.quizLOID+"/"+fileName;
									    	//$("#mainDiv").append("<object width='500' height='300' type='text/plain' data="+textDownload+" border='0'>");	
									    	//$("#mainDiv").append("<br>");
									    	//alert('dl text');
									    	window.location.href = textDownload;
									    });				
								}
								else if(d.type == "image")
								{
									var imgFile ="le/"+fileName+fileExtension;
									$.get(imgFile).
									    done(function(data) {
									         $("#mainDiv").append("<img src="+imgFile+" alt='Mountain View'>");
									    	 $("#mainDiv").append("<br>");
									    }).
									    fail(function() {
									        var imgDownload = "http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/connect/download/le/"+$scope.quizUSERID+"/"+$scope.quizLOID+"/"+fileName;
									    	//$("#mainDiv").append("<object width='500' height='300' type='text/plain' data="+imgDownload+" border='0'>");	
									    	//$("#mainDiv").append("<br>");
									    	//alert('dl img');
									    	window.location.href = imgDownload;
									    });	
								}
								else if(d.type == "audio" || d.type == "music")
								{
									var audFile ="le/"+fileName+fileExtension;
									$.get(audFile).
									    done(function(data) {
											$("#mainDiv").append("<audio controls><source src="+audFile+" type='audio/mpeg'>Your browser does not support the audio element.</audio>");        
									    	$("#mainDiv").append("<br>");
									    }).
									    fail(function() {
									        var audDownload = "http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/connect/download/le/"+$scope.quizUSERID+"/"+$scope.quizLOID+"/"+fileName;
									    	//$("#mainDiv").append("<object width='500' height='300' type='text/plain' data="+audDownload+" border='0'>");	
									    	//$("#mainDiv").append("<br>");
									    	//alert('dl aud');
									    	window.location.href = audDownload;
									    });	
									
								}
								else if(d.type == "video")
								{
									var vidFile ="le/"+fileName+fileExtension;
									$.get(vidFile).
									    done(function(data) {
											$("#mainDiv").append("<video width='320' height='240' controls><source src="+vidFile+" type='video/mp4'>Your browser does not support the video tag.</video>");        
									    	$("#mainDiv").append("<br>");
									    }).
									    fail(function() {
									        var vidDownload = "http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/connect/download/le/"+$scope.quizUSERID+"/"+$scope.quizLOID+"/"+fileNamed;
									    	//$("#mainDiv").append("<object width='500' height='300' type='text/plain' data="+vidDownload+" border='0'>");	
									    	//$("#mainDiv").append("<br>");
									    	//alert('dl vid');
									    	window.location.href = vidDownload;
									    });
									
								}
								*/
								$("#mainDiv").append("<br><br><br><br>");
							}
						});
					});
					//alert($scope.arr.length);
					$scope.pageLength = $scope.arr.length;
					//$scope.$apply();
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
					if($scope.status == 'Online'){	
						var win = window.open("http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/store/home", '_blank');
							if(win){
							    //Browser has allowed it to be opened
							    win.focus();
							}else{
							    //Broswer has blocked it
							    alert('Please allow popups for this site');
							}
						}
					else {
						alert('Please login online');
					}
				}
        	
	        	$scope.goToLORI = function(id,learningObjectId,subject,loris,reviewId) {
	        		if($scope.status == 'Online'){
		        		var info = JSON.stringify({
									ip: $rootScope.ip,
									//id:id, 
									learningObjectId: learningObjectId, 
									subject: subject,
									loris: loris,
									reviewId: reviewId,
									port:$rootScope.port
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
					else {
						alert('Please login online');
					}
				}
				$scope.goToQuiz = function(id,loid,loname,losubject,userName,userid) {
					if($scope.status == 'Online'){
							var info = JSON.stringify({
								ip: $rootScope.ip,
								//id:id, 
								lo_id: loid, 
								lo_name: loname,
								lo_subject:losubject,
								username:userName,
								user_id:userid,
								port: $rootScope.port
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
					else {
						alert('Please login online');
					}

						}
				$scope.goToDownload = function(test) {
					window.location.href = "http://"+$rootScope.ip+":"+$rootScope.port+"/InformatronYX/informatron/connect/download/test/"+test+".png";
				}

				$scope.getPlaylist = function(){
					//alert($scope.playlist.users);
					$("#mainDiv").empty();
					$scope.pagingFlag = false;
					$scope.playlistFlag = true;
        			$scope.selectedPlaylistFlag = false;
					var userPlaylist;
					$scope.currentPlaylist = [];
					$.each($scope.playlist.users, function(index, object){
						if(object.id == $scope.data.id){
							//alert('yay' + object.id);
							$.each(object.playlist, function(index, playlist){
								$scope.currentPlaylist.push(playlist);
							});
						}
					});
				}

				$scope.showPlaylist = function(playlistId, playlistTitle){
					$("#mainDiv").empty();
					$("#mainDiv").append("<h1>"+playlistTitle+"</h1>");
					$("#mainDiv").append("<br><br>");
        			$scope.selectedPlaylistFlag = true;
        			$scope.playlistFlag = false;
        			$scope.playlistLOs = [];
					$.each($scope.currentPlaylist, function(index, playlist){
						if(playlistId == playlist.playlistId)
						{
							//alert('wow nisakto wow' + playlistId);
							$.each(playlist.los, function(index, losInPlaylist){
								$scope.playlistLOs.push(losInPlaylist);
							});
						}
					});
				}

				//$scope.addLOtoPlaylist = function(){

				//}

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