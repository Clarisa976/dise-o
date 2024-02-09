			/*Al posicionar el ratón sobre la imagen aparece su texto usando hover()*/
			$(document).ready(function(){
				$("#menu li").on("mouseenter", function() {
					$(this).css({
						"background-color": "lightblue",
						"font-weight": "bold"
					});
				});
				$("#menu li").on("mouseleave", function() {
					$(this).css({
						"background-color": "white",
						"font-weight": "normal"
					});
				});
			});