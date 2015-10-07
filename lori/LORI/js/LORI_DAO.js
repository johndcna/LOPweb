// JavaScript Document
//time += 3600 * 1000 * 24 * 365 * 10;

jQuery.addEval = function(str) {
	var bean = new Bean();
	bean = $.btnPopup();
	
	//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
	/*}
	else {*/
	if(document.location.hostname == "localhost" || typeof(localStorage) == 'undefined') {
	
		var date = new Date();
		date.setTime(date.getTime() + (3600 * 1000 * 24 * 365 * 10));
		
		$.cookie( str, JSON.stringify(bean), { expires:date }); 
		console.log("cookie: "+$.cookie(str));
	
	}
	else {
		localStorage.setItem(str, JSON.stringify(bean));
		console.log(localStorage.getItem(str));
	}
	
	

	
	
};

jQuery.deleteEval = function(str) {
	if(document.location.hostname == "localhost" || typeof(localStorage) == 'undefined') {
		/*
		var date = new Date();
		date.setTime(date.getTime() + (-3600 * 1000 * 24 * 365 * 10));
		
		$.cookie( str, JSON.stringify(bean), { expires:date }); 
		//console.log("cookie: "+$.cookie(str));
		*/
		$.removeCookie(str);
	}
	else {
		localStorage.removeItem(str);
	}
};

jQuery.searchEval = function(str) {
	var bean = new Bean();
        var ok=0;
	
        
	if($.cookie(str) || typeof(localStorage) != 'undefined') {
		//var obj = $.parseJSON($.cookie(str));
		
		if(document.location.hostname == "localhost" || typeof(localStorage) == 'undefined') {
			var obj = $.parseJSON($.cookie(str));		
		}
		else if(localStorage.getItem(str) != null){
			var obj = $.parseJSON(localStorage.getItem(str));
		}
                else {
                    bean = null;
                    ok = 1;
                }
		
                if(ok == 0) {
                    bean.setReviewer(obj.reviewer);
                    bean.setObjectTitle(obj.objectTitle);
                    bean.setObjectSubject(obj.objectSubject);
                    bean.setContentQuality(obj.contentQuality);
                    bean.setLearningGoalAlign(obj.learningGoalAlign);
                    bean.setFeedback(obj.feedback);
                    bean.setMotivation(obj.motivation);
                    bean.setPresentationDesign(obj.presentationDesign);
                    bean.setInteractionUsability(obj.interactionUsability);
                    bean.setAccessibility(obj.accessibility);
                    bean.setReusability(obj.reusability);
                    bean.setStandards(obj.standards);
                    bean.setStatus(obj.status);
                    bean.setGenRemarks(obj.genRemarks);
                }
		
	}
	else 
		bean = null;
	
	return bean;
};

jQuery.statusUpdate = function(bean) {
	bean.setStatus("send");
};