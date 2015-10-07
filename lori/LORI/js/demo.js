/*
* Mootools Simple Modal
* Version 1.0
* Copyright (c) 2011 Marco Dell'Anna - http://www.plasm.it
*/
window.addEvent("domready", function(e){
   
  /* Modal Ajax */
  $("modal-ajax").addEvent("click", function(e){
    e.stop();
    var SM = new SimpleModal({"btn_ok":"Confirm button", "width":600});
        // Aggiunge Bottone Conferma
        SM.addButton("Confirm", "btn primary", function(){
						// Check
						if( $("confirm-text").get("value") != "DELETE" ){
							$("confirm-delete-error").setStyle("display", "block");
						}else{
							// Your code ...
							this.hide();
						}
        });
        // Aggiunge Bottone annulla
        SM.addButton("Cancel", "btn");
        SM.show({
          "model":"modal-ajax",
          "title":"Are you sure you want to delete this?",
          "param":{
            "url":"evaluation.html",
            "onRequestComplete": function(){ }
          }
        });
  })

  
});