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
	//var reviewer = obj.getReviewer();
	//var title = obj.getObjectTitle();
	//var subject = obj.getObjectSubject();
	var evaluation = {contentQuality : obj.getContentQuality(), learningGoalAlign : obj.getLearningGoalAlign(), feedback : obj.getFeedback(), motivation : obj.getMotivation(), presentationDesign : obj.getPresentationDesign(), interactionUsability : obj.getInteractionUsability(), accessibility : obj.getAccessibility(), reusability : obj.getReusability(), standards : obj.getStandards()};
	var evalArr = [obj.getContentQuality(), obj.getLearningGoalAlign(), obj.getFeedback(), obj.getMotivation(), obj.getPresentationDesign(), obj.getInteractionUsability(), obj.getAccessibility(), obj.getReusability(), obj.getStandards() ];
	//var genRemarks = obj.getGenRemarks();
	
	//console.log(reviews);
	console.log(evaluation);
	
		
	  

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

        
};