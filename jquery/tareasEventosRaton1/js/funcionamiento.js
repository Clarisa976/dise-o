/*Al posicionar el ratón sobre la imagen aparece su texto usando mouseenter() y mouseleave()*/
			$(document).ready(function(){
				$('.noticia img').mouseenter(function(){
					$(this).next('h3').css("display","flex");
				});

				$('.noticia img').mouseleave(function(){
					$(this).next('h3').css("display","none");
				})
			})
			/*Al posicionar el ratón sobre la imagen aparece su texto usando hover()*/
			/*$(document).ready(function(){
				$('.noticia img').hover(function(){
					
					$(this).next('h3').css("display","flex");
				},function(){
					$(this).next('h3').css("display","none");
				}
				);
			})*/