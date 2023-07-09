(function(){
	"use strict";
	let pageTop;
	const buttonTop = document.querySelector('#button-top');
	window.addEventListener('scroll', function(){
		pageTop = window.scrollY;
		if ( pageTop > 500 ) {
			buttonTop.className = 'show';
		} else {
			buttonTop.className = 'hide';
		}
	});
})();
