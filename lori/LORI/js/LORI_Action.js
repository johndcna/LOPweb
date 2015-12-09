// JavaScript Document
window.onload = function()
      {
          init();
      };
jQuery.internetCheck = function() {
	if (navigator.onLine) {
    // I'm online so submit the form.
		alert("online");
	}
	else {
		alert("offline");	
	}
};/*
var app = angular.module("test",[]);
    app.controller("testController",function($scope,$http){
        $scope.sendEvalu = function() {

             var Userjson = JSON.parse(localStorage.getItem("information"));

             var evalArr = [obj.getContentQuality(), obj.getLearningGoalAlign(), obj.getFeedback(), obj.getMotivation(), obj.getPresentationDesign(), obj.getInteractionUsability(), obj.getAccessibility(), obj.getReusability(), obj.getStandards() ];
            var evaluation = {id:Userjson.id,evaluation: evalArr,learningObjectId:Userjson.learningObjectId,subject:Userjson.subject,errorList:null,loris:Userjson.loris,reviewId:Userjson.reviewId
                    };
        var prom = $http.post( "http://"+Userjson.ip+":8080/Informatron/lori/subject",JSON.stringify(evaluation));
        prom.success(function(response){
            alert(response);
        });
        prom.error(function (response){
            alert(response);

        });
}

    });*/
jQuery.sendEval = function(obj) {

	var Userjson = JSON.parse(localStorage.getItem("information"));

	var evalArr = [obj.getContentQuality(), obj.getLearningGoalAlign(), obj.getFeedback(), obj.getMotivation(), obj.getPresentationDesign(), obj.getInteractionUsability(), obj.getAccessibility(), obj.getReusability(), obj.getStandards() ];
	var evaluation = {
        id:Userjson.id,
        evaluation: evalArr,
        learningObjectId:Userjson.learningObjectId,
        subject:Userjson.subject,
        errorList:null,
       // loris:Userjson.loris,
        reviewId:Userjson.reviewId
    };
        $.ajax({
        	url : "http://"+Userjson.ip+":"+Userjson.port+"/InformatronYX/informatron/lori/submit",
            type : 'POST',
            data: JSON.stringify(evaluation),//evaluation : JSON.stringify(evaluation)
            contentType: "application/json;charset=utf-8",
            dataType: 'json',
        	success: function(response) {
                console.log(evaluation);
                console.log("response: "+response);
        		alert("sent!");
        	},
        	error: function(response) {
        		console.log(evaluation);
                console.log("response: "+response);
        		alert("");
        	}
        });

             /* xhr = new XMLHttpRequest();
      xhr.open("POST","http://"+Userjson.ip+":8080/InformatronYX/informatron/lori/submit",true);
      xhr.send(evaluation);
      console.log("wtf ! "+xhr.responseText);*/
/*
beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Content-Type","application/json");
        xhrObj.setRequestHeader("Accept","application/json");
    }
    or

headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
            },
*/
};