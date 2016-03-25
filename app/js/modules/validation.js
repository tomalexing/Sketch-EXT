export  function validation (formId) {
	    $('form#'+ formId +' .field-error').remove();
	    $('form#'+ formId +' .input__field').removeClass('inputError');
	    let hasError = false;
	    $('form#'+ formId +' .requiredField').each(function() {
	        if(jQuery.trim($(this).val()) == '' || jQuery.trim($(this).val()) == jQuery.trim($(this).attr('placeholder'))){
	            $(this).parent().append('<strong class="field-error">Это поле необходимо заполнить. </strong>');
	            $(this).parent().addClass('inputError');
	            hasError = true;
	        } else {
	            if($(this).hasClass('email')) {
	                const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	                if(!emailReg.test(jQuery.trim($(this).val()))){
	                    $(this).parent().append('<strong class="field-error">Пожалуйста введите правельный email.</strong>');
	                    $(this).parent().addClass('inputError');
	                    hasError = true;
	                } 
	            } else if($(this).hasClass('phone')) {
	                const phoneReg = /^\+?[0-9 ]*$/;
	                if(!phoneReg.test(jQuery.trim($(this).val()))){
	                    $(this).parent().append('<strong class="field-error">Пожалуйста введите правельный телефон.</strong>');
	                    $(this).parent().addClass('inputError');
	                    hasError = true;
	                } 
	            } else if($(this).hasClass('date')) {
	                const dateReg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
	                if(!dateReg.test(jQuery.trim($(this).val()))){
	                    $(this).parent().append('<strong class="field-error">Пожалуйста введите правельную дату.</strong>');
	                    $(this).parent().addClass('inputError');
	                    hasError = true;
	                } 
	            } else if($(this).hasClass('time')) {
	                const dateReg = /^[0-9]{2}:[0-9]{2}$/;
	                if(!dateReg.test(jQuery.trim($(this).val()))){
	                    $(this).parent().append('<strong class="field-error">Пожалуйста введите правельное время.</strong>');
	                    $(this).parent().addClass('inputError');
	                    hasError = true;
	                } 
	            } else if($(this).hasClass('persons')) {
	                const personsReg = /^[1-9]{1}[0-9]{0,1}$/;
	                if(!personsReg.test(jQuery.trim($(this).val()))){
	                    $(this).parent().append('<strong class="field-error">Пожалуйста введите правельные персональные данные.</strong>');
	                    $(this).parent().addClass('inputError');
	                    hasError = true;
	                } 
	            }
	        }
		});

	    return hasError;
	};