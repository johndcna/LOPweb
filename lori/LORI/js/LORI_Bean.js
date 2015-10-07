// JavaScript Document

	function Bean (reviewer, objectTitle, objectSubject, genRemarks, contentQuality, learningGoalAlign, feedback, motivation, presentationDesign, interactionUsability, accessibility, reusability, standards, status) {
	
		this.reviewer = reviewer;
		this.objectTitle = objectTitle;
		this.objectSubject = objectSubject;
		this.genRemarks = genRemarks;
		this.contentQuality = contentQuality;
		this.learningGoalAlign = learningGoalAlign;
		this.feedback = feedback;
		this.motivation = motivation;
		this.presentationDesign = presentationDesign;
		this.interactionUsability = interactionUsability;
		this.accessibility = accessibility;
		this.reusability = reusability;
		this.standards = standards;
		this.status = status;	

		
		}
		
	function Bean() {}
	
	Bean.prototype = {
		
		constructor: Bean
	

	,	setReviewer: function(reviewer) {
			this.reviewer = reviewer
		}
	,	setObjectTitle: function(objectTitle) {
			this.objectTitle = objectTitle
		}
	,	setObjectSubject: function(objectSubject) {
			this.objectSubject = objectSubject
		}
	,	setGenRemarks: function(genRemarks) {
			this.genRemarks = genRemarks
		}
	,	setContentQuality: function(contentQuality) {
			this.contentQuality = contentQuality
		}
	,	setLearningGoalAlign: function(learningGoalAlign) {
			this.learningGoalAlign = learningGoalAlign
		}
	,	setFeedback: function(feedback) {
			this.feedback = feedback
		}
	,	setMotivation: function(motivation) {
			this.motivation = motivation
		}
	,	setPresentationDesign: function(presentationDesign) {
			this.presentationDesign = presentationDesign
		}
	,	setInteractionUsability: function(interactionUsability) {
			this.interactionUsability = interactionUsability
		}
	,	setAccessibility: function(accessibility) {
			this.accessibility = accessibility
		}
	,	setReusability: function(reusability) {
			this.reusability = reusability
		}
	,	setStandards: function(standards) {
			this.standards = standards
		}
	,	setStatus: function(status) {
			this.status = status
		}	
	,	getReviewer: function() {
			return this.reviewer
		}
	,	getObjectTitle: function() {
			return this.objectTitle
		}
	,	getObjectSubject: function() {
			return this.objectSubject
		}
	,	getGenRemarks: function() {
			return this.genRemarks
		}
	,	getContentQuality: function() {
			return this.contentQuality
		}
	,	getLearningGoalAlign: function() {
			return this.learningGoalAlign
		}
	,	getFeedback: function() {
			return this.feedback
		}
	,	getMotivation: function() {
			return this.motivation
		}
	,	getPresentationDesign: function() {
			return this.presentationDesign
		}
	,	getInteractionUsability: function() {
			return this.interactionUsability
		}
	,	getAccessibility: function() {
			return this.accessibility
		}
	,	getReusability: function() {
			return this.reusability
		}
	,	getStandards: function() {
			return this.standards
		}
	,	getStatus: function() {
			return this.status
		}
	
	
	
	}
	
	
	//var bean = new Bean(54);