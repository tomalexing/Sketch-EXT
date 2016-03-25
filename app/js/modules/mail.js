import {validation}     from './validation'
export  class Mail  {
	static get defaults() {
	    return {
	    	func: function( data, textStatus, jQxhr ) {
            	alert(success);
        	}
        }
	}

	constructor(el,options) {
		this.$form = el instanceof $ ? el : $(el);
		this.settings = $.extend(true, {}, Mail.defaults, options);
		this.cb = this.settings.func;
		this._send(this);
		console.log(this.cb);
		return this;
	}
	_send(that) {
	 	this.$form.on("submit", function(event) {
	    	event.preventDefault();
	    	var $self = $(this);
	        if(!validation($self.attr("id"))) {
	        	console.log(this.cb);
	            $.ajax({
	                url: $self.attr("action"),
	                data: $self.serialize(),
	                type: 'post',
	                dataType: "html",
	                success: that.cb.call($self)
	            });

	        }
	        return false;
	    });
	}
};