// JavaScript Document
$(document).ready(function(){
	var x='x';
	var o='0';
	var turns=0;
	var sport1=$('#spot1');
	var sport2=$('#spot2');
	var sport3=$('#spot3');
	var sport4=$('#spot4');
	var sport5=$('#spot5');
	var sport6=$('#spot6');
	var sport7=$('#spot7');
	var sport8=$('#spot8');
	var sport9=$('#spot9');
	$('#board li').click(function(e){
		e.preventDefault();
		   if  (sport1.hasClass('o') && sport2.hasClass('o') && sport3.hasClass('o') ||
		     sport4.hasClass('o') && sport5.hasClass('o') && sport6.hasClass('o') ||
		     sport7.hasClass('o') && sport8.hasClass('o') && sport9.hasClass('o') ||
		     sport1.hasClass('o') && sport4.hasClass('o') && sport7.hasClass('o') ||
		     sport2.hasClass('o') && sport5.hasClass('o') && sport8.hasClass('o') ||
		     sport3.hasClass('o') && sport6.hasClass('o') && sport9.hasClass('o') ||
			 sport1.hasClass('o') && sport5.hasClass('o') && sport9.hasClass('o') ||
			 sport3.hasClass('o') && sport5.hasClass('o') && sport7.hasClass('o') 
		      )//end of if
			  { 
			  
				 alert('winner: o');
				 $('#board li').text('+');
				 $('#board li').removeClass('o');
				 $('#board li').removeClass('x');
				 $('#board li').removeClass('disable'); 
			  }else if  (sport1.hasClass('x') && sport2.hasClass('x') && sport3.hasClass('x') ||
		     sport4.hasClass('x') && sport5.hasClass('x') && sport6.hasClass('x') ||
		     sport7.hasClass('x') && sport8.hasClass('x') && sport9.hasClass('x') ||
		     sport1.hasClass('x') && sport4.hasClass('x') && sport7.hasClass('x') ||
		     sport2.hasClass('x') && sport5.hasClass('x') && sport8.hasClass('x') ||
		     sport3.hasClass('x') && sport6.hasClass('x') && sport9.hasClass('x') ||
			 sport1.hasClass('x') && sport5.hasClass('x') && sport9.hasClass('x') ||
			 sport3.hasClass('x') && sport5.hasClass('x') && sport7.hasClass('x') 
		      )//end of if
			  {
				  
				 alert('winner: x');
				 $('#board li').text('+');
				 $('#board li').removeClass('o');
				 $('#board li').removeClass('x');
				 $('#board li').removeClass('disable'); 
			  }else if(turns===9){
				  $('#board li').text('+');
				 $('#board li').removeClass('o');
				 $('#board li').removeClass('x');
				 $('#board li').removeClass('disable'); 
				  turns=0;
				  }else if($(this).hasClass('disable')){
					  alert('this spot is filled');
					  }else if(turns%2 === 0){
						  turns++;
						  $(this).text(o);
						  $(this).addClass('disable o');
						  
						  if  (sport1.hasClass('o') && sport2.hasClass('o') && sport3.hasClass('o') ||
		                   sport4.hasClass('o') && sport5.hasClass('o') && sport6.hasClass('o') ||
		                   sport7.hasClass('o') && sport8.hasClass('o') && sport9.hasClass('o') ||
		                   sport1.hasClass('o') && sport4.hasClass('o') && sport7.hasClass('o') ||
		                   sport2.hasClass('o') && sport5.hasClass('o') && sport8.hasClass('o') ||
		                   sport3.hasClass('o') && sport6.hasClass('o') && sport9.hasClass('o') ||
			               sport1.hasClass('o') && sport5.hasClass('o') && sport9.hasClass('o') ||
			               sport3.hasClass('o') && sport5.hasClass('o') && sport7.hasClass('o') 
		          ){
	                       alert('winner: o');
						   $('#board li').removeClass('disable');
			               $('#board li').removeClass('o x');
				           $('#board li').text('+');
				 		   turns=0;			  
				     }else{
						  turns++;
						  $(this).text(x);
						  $(this).addClass('disable x');
						 
						 if  (sport1.hasClass('x') && sport2.hasClass('x') && sport3.hasClass('x') ||
		                   sport4.hasClass('x') && sport5.hasClass('x') && sport6.hasClass('x') ||
		                   sport7.hasClass('x') && sport8.hasClass('x') && sport9.hasClass('x') ||
		                   sport1.hasClass('x') && sport4.hasClass('x') && sport7.hasClass('x') ||
		                   sport2.hasClass('x') && sport5.hasClass('x') && sport8.hasClass('x') ||
		                   sport3.hasClass('x') && sport6.hasClass('x') && sport9.hasClass('x') ||
			               sport1.hasClass('x') && sport5.hasClass('x') && sport9.hasClass('x') ||
			               sport3.hasClass('x') && sport5.hasClass('x') && sport7.hasClass('x') 
		          ){
	                       alert('winner: x');
						   $('#board li').removeClass('disable');
			               $('#board li').removeClass('o x');
				           $('#board li').text('+');
						   turns=0;		
				  }
						 
						 }
				   }
			  
		});
		 $('#reset').click(function(e){
			    e.preventDefault();
				$('#board li').removeClass('disable');
			    $('#board li').removeClass('o x');
				$('#board li').text('+');
				turns=0;
			    });
	});