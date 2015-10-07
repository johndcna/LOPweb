jQuery.btnPopup = function() {
		//var bean = new Bean();
		//bean.setId(4);
		//alert(bean.getId());
		
		//var a = $('#collapseOne').find('.active').text() $('.try').find('.active').text();
		//alert(a);
		
		var reviewer = $('.text-name').val();
		var title = $('#object-title').text();
		var subject = $('#object-subject').text();
		var genRemarks = $('.animated-textarea').val();
		var contentQuality = $('#collapseOne').find('.active').val();
		var learningGoalAlign = $('#collapseTwo').find('.active').val();
		var feedback = $('#collapseThree').find('.active').val();
		var motivation = $('#collapseFour').find('.active').val();
		var presentationDesign = $('#collapseFive').find('.active').val();
		var interactionUsability = $('#collapseSix').find('.active').val();
		var accessibility = $('#collapseSeven').find('.active').val();
		var reusability = $('#collapseEight').find('.active').val();
		var standards = $('#collapseNine').find('.active').val();
		
		var bean = new Bean (reviewer, title, subject, genRemarks, contentQuality, learningGoalAlign, feedback, motivation, presentationDesign, interactionUsability, accessibility, reusability, standards, "pending");
		//var bean = new Bean();
		
		bean.setReviewer(reviewer);
		bean.setObjectTitle(title);
		bean.setObjectSubject(subject);
		bean.setContentQuality(contentQuality);
		bean.setLearningGoalAlign(learningGoalAlign);
		bean.setFeedback(feedback);
		bean.setMotivation(motivation);
		bean.setPresentationDesign(presentationDesign);
		bean.setInteractionUsability(interactionUsability);
		bean.setAccessibility(accessibility);
		bean.setReusability(reusability);
		bean.setStandards(standards);
		bean.setStatus('pending');
		bean.setGenRemarks(genRemarks);
		
		
		return bean;
	
	};
	
jQuery.checkObject = function(str) {
	if($.searchEval(str) != null) {
		var bean = new Bean();
		bean = $.searchEval(str);
		console.log(bean);
		//
		if(bean.getReviewer() != "")
		$('.text-name').val(bean.getReviewer());
		if(bean.getObjectTitle() != "")
		$('#object-title').text(bean.getObjectTitle());
		if(bean.getObjectSubject() != "")
		$('#object-subject').text(bean.getObjectSubject());
		if(bean.getReviewer() != "")
		$('.text-name').val(bean.getReviewer());
		if(bean.getGenRemarks() != "")
		$('.animated-textarea').val(bean.getGenRemarks());
		if(bean.getContentQuality() != "")
		$('#collapseOne').find('#'+ bean.getContentQuality()).addClass("active");
		if(bean.getLearningGoalAlign() != "")
		$('#collapseTwo').find('#'+ bean.getLearningGoalAlign()).addClass("active");
		if(bean.getFeedback() != "")
		$('#collapseThree').find('#'+ bean.getFeedback()).addClass("active");
		if(bean.getMotivation() != "")
		$('#collapseFour').find('#'+ bean.getMotivation()).addClass("active");
		if(bean.getPresentationDesign() != "")
		$('#collapseFive').find('#'+ bean.getPresentationDesign()).addClass("active");
		if(bean.getInteractionUsability() != "")
		$('#collapseSix').find('#'+ bean.getInteractionUsability()).addClass("active");
		if(bean.getAccessibility() != "")
		$('#collapseSeven').find('#'+ bean.getAccessibility()).addClass("active");
		if(bean.getReusability() != "")
		$('#collapseEight').find('#'+ bean.getReusability()).addClass("active");
		if(bean.getStandards() != "")
		$('#collapseNine').find('#'+ bean.getStandards()).addClass("active");
		
		//alert('checkobject');
		$.checkButton();
		
		
	}

	
	
};

jQuery.checkForm = function() {
	
	if($('.text-name').val() == "") {
		alert("Please fill in the username field.");
		return 0;
	}else if($('#collapseOne').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 1");
		return 0;
	}else if($('#collapseTwo').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 2");
		return 0;
	}else if($('#collapseThree').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 3");
		return 0;
	}else if($('#collapseFour').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 4");
		return 0;
	}else if($('#collapseFive').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 5");
		return 0;
	}else if($('#collapseSix').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 6");
		return 0;
	}else if($('#collapseSeven').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 7");
		return 0;
	}else if($('#collapseEight').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 8");
		return 0;
	}else if($('#collapseNine').find('.active').length == 0) {
		alert("Sending failed! You skipped question number 9");
		return 0;
	}
	
	
	
	return 1;
};

jQuery.onClick = function() {
	//alert('onclick');
		$('.btn-group#q1 .btn').click(function(){
			$('#item-title-1').css('color','rgba(0,0,0,0.5)');
			$('#item-title-1').css('fontStyle','italic');
			$('#icon-1').addClass('glyphicon-ok');
			$('#icon-1').removeClass('glyphicon-chevron-down');
			$('#check-mark-1').addClass('bokeh-1');
			$('#check-mark-1').removeClass('bokeh');
			$('.content#q1').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q2 .btn').click(function(){
			$('#item-title-2').css('color','rgba(0,0,0,0.5)');
			$('#item-title-2').css('fontStyle','italic');
			$('#icon-2').addClass('glyphicon-ok');
			$('#icon-2').removeClass('glyphicon-chevron-down');
			$('#check-mark-2').addClass('bokeh-1');
			$('#check-mark-2').removeClass('bokeh');
			$('.content#q2').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q3 .btn').click(function(){
			$('#item-title-3').css('color','rgba(0,0,0,0.5)');
			$('#item-title-3').css('fontStyle','italic');
			$('#icon-3').addClass('glyphicon-ok');
			$('#icon-3').removeClass('glyphicon-chevron-down');
			$('#check-mark-3').addClass('bokeh-1');
			$('#check-mark-3').removeClass('bokeh');
			$('.content#q3').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q4 .btn').click(function(){
			$('#item-title-4').css('color','rgba(0,0,0,0.5)');
			$('#item-title-4').css('fontStyle','italic');
			$('#icon-4').addClass('glyphicon-ok');
			$('#icon-4').removeClass('glyphicon-chevron-down');
			$('#check-mark-4').addClass('bokeh-1');
			$('#check-mark-4').removeClass('bokeh');
			$('.content#q4').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q5 .btn').click(function(){
			$('#item-title-5').css('color','rgba(0,0,0,0.5)');
			$('#item-title-5').css('fontStyle','italic');
			$('#icon-5').addClass('glyphicon-ok');
			$('#icon-5').removeClass('glyphicon-chevron-down');
			$('#check-mark-5').addClass('bokeh-1');
			$('#check-mark-5').removeClass('bokeh');
			$('.content#q5').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q6 .btn').click(function(){
			$('#item-title-6').css('color','rgba(0,0,0,0.5)');
			$('#item-title-6').css('fontStyle','italic');
			$('#icon-6').addClass('glyphicon-ok');
			$('#icon-6').removeClass('glyphicon-chevron-down');
			$('#check-mark-6').addClass('bokeh-1');
			$('#check-mark-6').removeClass('bokeh');
			$('.content#q6').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q7 .btn').click(function(){
			$('#item-title-7').css('color','rgba(0,0,0,0.5)');
			$('#item-title-7').css('fontStyle','italic');
			$('#icon-7').addClass('glyphicon-ok');
			$('#icon-7').removeClass('glyphicon-chevron-down');
			$('#check-mark-7').addClass('bokeh-1');
			$('#check-mark-7').removeClass('bokeh');
			$('.content#q7').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q8 .btn').click(function(){
			$('#item-title-8').css('color','rgba(0,0,0,0.5)');
			$('#item-title-8').css('fontStyle','italic');
			$('#icon-8').addClass('glyphicon-ok');
			$('#icon-8').removeClass('glyphicon-chevron-down');
			$('#check-mark-8').addClass('bokeh-1');
			$('#check-mark-8').removeClass('bokeh');
			$('.content#q8').css('background','rgba(0,0,0,0.1)');
		});
		$('.btn-group#q9 .btn').click(function(){
			$('#item-title-9').css('color','rgba(0,0,0,0.5)');
			$('#item-title-9').css('fontStyle','italic');
			$('#icon-9').addClass('glyphicon-ok');
			$('#icon-9').removeClass('glyphicon-chevron-down');
			$('#check-mark-9').addClass('bokeh-1');
			$('#check-mark-9').removeClass('bokeh');
			$('.content#q9').css('background','rgba(0,0,0,0.1)');
		});	
}

jQuery.checkButton = function() {
	//alert('checkbutton');
	if($('#collapseOne').find('.active').length > 0) {
			$('#item-title-1').css('color','rgba(0,0,0,0.5)');
			$('#item-title-1').css('fontStyle','italic');
			$('#icon-1').addClass('glyphicon-ok');
			$('#icon-1').removeClass('glyphicon-chevron-down');
			$('#check-mark-1').addClass('bokeh-1');
			$('#check-mark-1').removeClass('bokeh');
			$('.content#q1').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseTwo').find('.active').length > 0) {
			$('#item-title-2').css('color','rgba(0,0,0,0.5)');
			$('#item-title-2').css('fontStyle','italic');
			$('#icon-2').addClass('glyphicon-ok');
			$('#icon-2').removeClass('glyphicon-chevron-down');
			$('#check-mark-2').addClass('bokeh-1');
			$('#check-mark-2').removeClass('bokeh');
			$('.content#q2').css('background','rgba(0,0,0,0.1)');
	} 
	if($('#collapseThree').find('.active').length > 0) {
			$('#item-title-3').css('color','rgba(0,0,0,0.5)');
			$('#item-title-3').css('fontStyle','italic');
			$('#icon-3').addClass('glyphicon-ok');
			$('#icon-3').removeClass('glyphicon-chevron-down');
			$('#check-mark-3').addClass('bokeh-1');
			$('#check-mark-3').removeClass('bokeh');
			$('.content#q3').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseFour').find('.active').length > 0) {
		 	$('#item-title-4').css('color','rgba(0,0,0,0.5)');
			$('#item-title-4').css('fontStyle','italic');
			$('#icon-4').addClass('glyphicon-ok');
			$('#icon-4').removeClass('glyphicon-chevron-down');
			$('#check-mark-4').addClass('bokeh-1');
			$('#check-mark-4').removeClass('bokeh');
			$('.content#q4').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseFive').find('.active').length > 0) {
			$('#item-title-5').css('color','rgba(0,0,0,0.5)');
			$('#item-title-5').css('fontStyle','italic');
			$('#icon-5').addClass('glyphicon-ok');
			$('#icon-5').removeClass('glyphicon-chevron-down');
			$('#check-mark-5').addClass('bokeh-1');
			$('#check-mark-5').removeClass('bokeh');
			$('.content#q5').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseSix').find('.active').length > 0) {
			$('#item-title-6').css('color','rgba(0,0,0,0.5)');
			$('#item-title-6').css('fontStyle','italic');
			$('#icon-6').addClass('glyphicon-ok');
			$('#icon-6').removeClass('glyphicon-chevron-down');
			$('#check-mark-6').addClass('bokeh-1');
			$('#check-mark-6').removeClass('bokeh');
			$('.content#q6').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseSeven').find('.active').length > 0) {
			$('#item-title-7').css('color','rgba(0,0,0,0.5)');
			$('#item-title-7').css('fontStyle','italic');
			$('#icon-7').addClass('glyphicon-ok');
			$('#icon-7').removeClass('glyphicon-chevron-down');
			$('#check-mark-7').addClass('bokeh-1');
			$('#check-mark-7').removeClass('bokeh');
			$('.content#q7').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseEight').find('.active').length > 0) {
			$('#item-title-8').css('color','rgba(0,0,0,0.5)');
			$('#item-title-8').css('fontStyle','italic');
			$('#icon-8').addClass('glyphicon-ok');
			$('#icon-8').removeClass('glyphicon-chevron-down');
			$('#check-mark-8').addClass('bokeh-1');
			$('#check-mark-8').removeClass('bokeh');
			$('.content#q8').css('background','rgba(0,0,0,0.1)');
	}
	if($('#collapseNine').find('.active').length > 0) {
			$('#item-title-9').css('color','rgba(0,0,0,0.5)');
			$('#item-title-9').css('fontStyle','italic');
			$('#icon-9').addClass('glyphicon-ok');
			$('#icon-9').removeClass('glyphicon-chevron-down');
			$('#check-mark-9').addClass('bokeh-1');
			$('#check-mark-9').removeClass('bokeh');
			$('.content#q9').css('background','rgba(0,0,0,0.1)');
	}

}

jQuery.objectName = function() {

        var title = getURLParameter('title');
        var subject = getURLParameter('subject');

        //var title = "Learning Object";
        //var subject = "Learning Object Working";
	
        $('#object-title').text(title);
		$('#object-subject').text(subject);

    
    
	return title;	
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

//alert(getURLParameter('title'));