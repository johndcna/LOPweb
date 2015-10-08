// JavaScript Document

jQuery.internetCheck = function() {
	if (navigator.onLine) {
    // I'm online so submit the form.
		alert("online");
	}
	else {
		alert("offline");	
	}
};

jQuery.sendEval = function(obj) {
	//var obj = {friend : 'lea'};
	var Userjson = JSON.parse(localStorage.getItem("jsonLogin"));
	var evalArr = [obj.getContentQuality(), obj.getLearningGoalAlign(), obj.getFeedback(), obj.getMotivation(), obj.getPresentationDesign(), obj.getInteractionUsability(), obj.getAccessibility(), obj.getReusability(), obj.getStandards() ];
	var evaluation = {id:null,evaluation: evalArr,learningObjectId:null,subject:null,errorList:null,loris:null,reviewId:null};
	//console.log(reviews);
	//console.log(evaluation);
	console.log(evaluation);
	
		
	  
/*
        $.ajax({
        	type : 'POST',
        	//url : "http://172.31.11.208/informatron/LORIImporter.php",
        	url : "http://172.31.11.208:8080/Informatron/evaluate",
        	//url : "http://localhost:8080/Informatron/evaluate",
        	data: {  evaluation : JSON.stringify(evaluation)},//reviewer : reviewer , title : title , subject : subject , evaluation : JSON.stringify(evaluation), remarks : genRemarks 
        	success: function() {
        		console.log(evalArr);
        		alert("sent!");
        	},
        	error: function() {
        		console.log(evalArr);
        		alert("errr!");
        	}
        });
*/
        
};