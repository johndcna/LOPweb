// JavaScript Document
document.write('<script src="LORI/js/jquery.cookie.js" type="text/javascript" charset="utf-8"></script>');
document.write('<script src="LORI/js/bootstrap-modal.js" type="text/javascript" charset="utf-8"></script>');

	$(document).ready(function(e) {
		//var obj = "Physics";
		ok = 0;
		//console.log('working');

		console.log(localStorage);
		
		$.checkObject($.objectName());
		$.onClick();
		
		

		$('#send').click(function(e) {

			if($.checkForm() == 0) {
				//ok = 1;
				$('#basic-modal-content1').addClass('hide fade');
				
			}
			else {
				
				//$('#basic-modal-content1').removeClass('hide fade');
				$.sendEval($.btnPopup());
			}

		   
        });

		$('#send_now').click(function(e) {
			
			//if($.checkForm() == 1) {
					//console.log('sending');
					//console.log($.btnPopup());
	            	//$.sendEval($.btnPopup());
	            	$.deleteEval($.objectName());

					
			//}
		   
        });

        $('.for-reload').click(function(e) {
			
			location.reload();
		   
        });
		
		$('#cancel').click(function(e) {
			
			backq();
		   
        });
		
		$('.closex').click(function(e) {
			
			backq();
		   
        });
		
		if(ok == 1) {
			$('.modal.in').modal('hide');
			console.log('ok');
		}
		
		
		
		
    });
	
	function backq(){
		//document.getElementById("test").innerHTML = "Done!" ;
		window.close();
		top.open('','_self',''); top.close();
	}
	
	