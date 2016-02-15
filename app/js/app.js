//import  './modules/restore'
import initPlayerApi   from './modules/player'
import ModalPlayer     from './modules/modal'
import {animateMenu}     from './modules/menu'
import SliderBox     from './modules/slider-box'
import {mail}     from './modules/mail'
//modal youtube player

initPlayerApi.initPlayerApi();
new initPlayerApi.ModalPlayer('#player', '#play');
//nemu + anchor
animateMenu('.nav','.anchor-down','#hdiw');
new SliderBox('.slider__block .slider__block-in');
mail('#formOrder');



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
