$(document).ready(function(){
	$(document).keypress(function(e){
		if(e.key=='m'){
			$('h3').toggle();
		}
	});
})