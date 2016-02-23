//import  './modules/restore'
import initPlayerApi   from './modules/player'
import ModalPlayer     from './modules/modal'
import {animateMenu}     from './modules/menu'
import SliderBox     from './modules/slider-box'
import {Mail} 		from './modules/mail'
//modal youtube player
var Instafeed = require("../../node_modules/instafeed.js/instafeed.min.js");

initPlayerApi.initPlayerApi();
new initPlayerApi.ModalPlayer('#player', '#play');
//nemu + anchor
animateMenu('.nav','.anchor-down','#hdiw');
new SliderBox('.slider__block .slider__block-in');



new Mail('#formOrder',{
	func: function( data, textStatus, jQxhr ) {
    	$("form#" + this.attr("id")+" input").val("") ;
		$(".subscribe__block-in .title").html(" <h2 style='font-size: 36px !important'>  Спасибо! </h2>").hide().fadeIn(500);
		$(".input__block form").detach();
		$(".subscribe__block-in .below ").hide();
		setTimeout( function() {
			$(".input__block").append('<p class="sended"> <img class="svg-icon svg-sended" src="img/sended.svg"></img> </p>').hide().fadeIn(500);
		}, 500);
		setTimeout( function() {
			$(".subscribe__block-in .below ").html("<p style='padding-top: 75px'> Теперь вы будете получать свежие новости на почту</p>").hide().fadeIn(500);
		},1000);
	}
});


new Mail('#send',{
	func: function( data, textStatus, jQxhr ) {
		let $this = $(this);
    	$("form#" + $this.attr("id")+" input").val("") ;
		$this.detach();
		console.log($this.parent());
		$('.footer__form').html(" <h2 style='font-size: 36px !important'>  Спасибо! Мы с Вами свяжемся</h2> <div class='below'> </div>").hide().fadeIn(1000);
		setTimeout( function() {
			$('.footer__form .below').append('<p class="sended"> <img class="svg-icon svg-sended" src="img/sended.svg"></img> </p>').hide().fadeIn(1000);
		}, 1000);
	}
});


var feed = new Instafeed({
		 clientId: '780c9896996d46b8b6a14aedf7ac3c97',
		 get: 'user',
		 userId: '2969569043',
		 accessToken: '326424925.1677ed0.ea4bb5fb450049bab5f54613d08cedc2',
		 template: '<a class="insta" href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();

//$(document).load($(window).bind("resize", openMenu));
// $(document).load( function(){
// 	myScroll = new IScroll('#wr',{
// 		probeType: 3,
// 		useTransform: false,
// 		useTransition: false
// 	});
// 	myScroll.on('scroll',function() {
// 		console.log('s');
// 	});
// });
