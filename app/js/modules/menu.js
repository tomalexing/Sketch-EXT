var openModal  = require('./modal');

export function animateMenu(menu, trigger_anchor, anchor_page, trigger_nenu) {
	const $menu     = menu instanceof $ ? menu : $(menu);
	const $trigger_anchor     = trigger_anchor instanceof $ ? trigger_anchor : $(trigger_anchor);
	const $links    = $(''+ menu + ' .nav__item a[href^="#"]');
	const $anchorLeadToPage    = $(''+ menu + ' a[href^='+anchor_page+']');
	const $openMenuPage    = trigger_nenu instanceof $ ? trigger_nenu : trigger_nenu === undefined ? $('[name='+anchor_page.substring(1)+']') : $('[name='+trigger_nenu+']');
	const $win    = $(window);
	const $download__btn = $('.header__row a[href^="popup-download"]');
	const $popup__download = $('#popup-download');
	let tooglemenu = true;
	//active menu
	$win.on("scroll",function() {
		let scrollPos = $win.scrollTop();
		if ($openMenuPage.position().top - 80 <= scrollPos ) {
			$('.out').addClass('is-menu-fixed')
		}else{
			$('.out').removeClass('is-menu-fixed')
		};
	

	});
	console.log($links);
	//add active class
	$links.on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		$win.off("scroll",onScroll);
		$links.each(function () {
			$(this).removeClass('is-active');
		});

		$(this).addClass('is-active');
		let target = this.hash,
		$target = $('[name='+target.substring(1)+']');

		$('html, body').stop().animate({
			'scrollTop': $(window).width() <= 1024 ? $target.offset().top - 60 : $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
			$win.on("scroll",onScroll);
		});
		return false
	});
	// anchore
	$trigger_anchor.on('click',function(){
		$links.trigger.call($anchorLeadToPage,"click");
	})
	// clickable scroll menu
	$win.on("scroll",onScroll);
	function onScroll(e){
		let scrollPos = $win.scrollTop();
		$links.each(function () {
			let currLink = $(this);
			let refElement = $('[name='+currLink.attr("href").substring(1)+']');
			if (refElement.position().top - 80 <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
				$links.removeClass("is-active");
				currLink.addClass("is-active");
			}
			else{
				currLink.removeClass("is-active");
			}
		});
	}
		/* bind events */
	if($(window).width() <= 1024){
		$(document)
			.on('focus', 'input', function() {
			$('.out').addClass('fixfixed');
			})
			.on('blur', 'input', function() {
			$('.out').removeClass('fixfixed');
			});

		$links.on('click', function (e) {
			$('.mobile__menu').trigger("click");
		});
	}

	function openMenu(){
	    if($(window).width() <= 1024){
	    	if(tooglemenu){
		        $(".header").css({
		        	"height" : $(window).height()
		        });
		        tooglemenu = false;
			}else{
				$(".header").css({
					"height" : "60px",
				});
				tooglemenu = true;
			}
	    }
	};

	$('.header').delegate('.mobile__menu','click',function(){
		$('.out').toggleClass('active-menu');
		openMenu();
		return false
	})

	$download__btn.on('click', (e) => {
	  e.preventDefault();
	  openModal($popup__download);
	});

};


