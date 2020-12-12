// Scroll Indicator

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Scroll Reveal
ScrollReveal().reveal('div', {delay: 100, reset: false, duration: 600, easing: 'cubic-bezier(0.2, 0, 0, 1)',
});


// Typed JS
$(function(){
	$(".typed").typed({
		strings: ["Problem Solver.", "People Person.", "Designer."],
		stringsElement: null,
		typeSpeed: 100,
		startDelay: 1500,
		backSpeed: 50,
		backDelay: 800,
		loop: true,
		loopCount: 5,
		showCursor: false,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	});
});
