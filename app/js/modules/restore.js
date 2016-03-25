export default (() => {
	const originalOn = $.fn.on;
	const originalOff = $.fn.off;
	 let needToRestore = false;
	 let temp = [];


	$.fn.on = (function(){
		let count = 0;

		return  function (event,handler){
			count++;
			let that = this;
			if(needToRestore && arguments[0]==="scroll" && arguments[1] === undefined){
				temp.forEach(function(index, el) {
					//console.log(el);
					(function(el){
						originalOn.apply(temp[el].th, temp[el].ar);
					})(el);
				})
				needToRestore = false;
			}else{
				if(arguments[0]==="scroll") 
					temp.push({th : that, ar: arguments})

				originalOn.apply(this, arguments);
			}
		}
	}());

	$.fn.off = (function(){
			let count = 0;
			return  function (event){
				count++;
				//console.log(arguments[1]);
				if(arguments[0]==="scroll"){
					needToRestore = true;
				}

				originalOff.apply(this, arguments);
			}
	}());

})();
