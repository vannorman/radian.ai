$(document).ready(function(){
	nextOnFn = [];
	nextOnEl = [];
	nextOffFn = [];
	nextOffEl = [];
	Update();
});

function Update(){
	var growSpeed = 6;
	setTimeout(function(){Update();},10);
	$('.underlineShrink').each(function(){
		$(this).css('float','right');
		if ($(this).hasClass('underlineGrow')) return; // wait until growth finished
		var p = $(this).width() / ($(this).parent().width()) * 100;
		p -= growSpeed;
		//console.log('shrink:'+p);
		if (p <= 0){
			p = 0;
			$(this).removeClass('underlineShrink');
		}
		p += "%"
		$(this).css('width',p);
	});
	$('.underlineGrow').each(function(){
		$(this).css('float','left');
		var p = $(this).width() / ($(this).parent().width()) * 100;
		p += growSpeed;
		if (p >= 100) {
			p = 100;
			$(this).removeClass('underlineGrow');
		}
		p += "%";
		$(this).css('width',p);
	});
	
	
}

$(document).ready(function(){
	$('#navbar .buttons ul li a').hover(function(){
		//console.log('hovering');
	});
	$('#navbar .buttons ul li a').mouseenter(function(){
		$bot = $(this).parent().find('.bottom');
		ResetUnderlineState($bot);
		$bot.addClass('underlineGrow');
	});

	$('#navbar .buttons ul li a').mouseleave(function(){
		$bot = $(this).parent().find('.bottom');
		if (!$bot.hasClass('underlineShrink')) $bot.addClass('underlineShrink');

	});
});

function ResetUnderlineState($bot){
	if ($bot.hasClass('underlineShrink')){
		$bot.removeClass('underlineShrink');
	}
	if ($bot.hasClass('underlineGrow')){
		$bot.removeClass('underlineGrow');
	}

}
