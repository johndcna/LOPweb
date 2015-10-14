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

	var Userjson = JSON.parse(localStorage.getItem("information"));

	var evalArr = [obj.getContentQuality(), obj.getLearningGoalAlign(), obj.getFeedback(), obj.getMotivation(), obj.getPresentationDesign(), obj.getInteractionUsability(), obj.getAccessibility(), obj.getReusability(), obj.getStandards() ];
	var evaluation = {id:Userjson.id,evaluation: evalArr,learningObjectId:Userjson.learningObjectId,subject:Userjson
        .subject,errorList:null,loris:Userjson.loris,reviewId:Userjson.reviewId
    };
	
	  

        $.ajax({
        	type : 'POST',
        	url : "http://"+Userjson.ip+":8080/Informatron/lori/subject",
        	data: {  evaluation : JSON.stringify(evaluation)}, 
        	success: function() {
        		alert("sent!");
        	},
        	error: function() {
        		console.log(evaluation);
        		alert("errr!");
        	}
        });
};