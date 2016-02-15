import {validation}     from './validation'
export  function mail(form) {
	  const $form = form instanceof $ ? form : $(form);
	  $(form).on("submit", function(event) {
	    	event.preventDefault();
	    	const $self = $(this);
	        if(!validation($self.attr("id"))) {

	            $.ajax({
	                url: $self.attr("action"),
	                data: $self.serialize(),
	                type: 'post',
	                dataType: "html",
	                success: function( data, textStatus, jQxhr ) {
	                	$("form#" + $self.attr("id")+" input").val("") ;
						$(".subscribe__block-in .title").html(" <h2 style='font-size: 36px !important'>  Спасибо! </h2>").hide().fadeIn(500);
						$(".input__block form").detach();
						$(".below ").hide();
						setTimeout( function() {
							$(".input__block").append('<p class="sended"> <svg class="svg-icon svg-sended}"> <use xlink:href="img/sprite.svg#svg-sended"></use> </svg> </p>').hide().fadeIn(500);
						}, 500);
						setTimeout( function() {
							$(".below ").html("<p style='padding-top: 75px'> Теперь вы будете получать свежие новости на почту</p>").hide().fadeIn(500);
						},1000);
	            	}
	            });

	        }
	        return false;
	    });
};