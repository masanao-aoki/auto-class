(function($) {
	$.fn.autoClass = function(){
		
    var $animeSine = $(this);
		var animeCount = $animeSine.length;
		var animeArray = []

		$animeSine.each(function (i) {
			n = i + 1;
			animeArray[i] = $('[data-anime-sine='+n+']').data();
		});

		function complateAnime (Num,target) {
			target.addClass('anime_end');
			startAnime(animeArray[Num].animeSine);
		}

		function startAnime (Num) {
			if( animeCount > Num ) {
				$('[data-anime-sine='+animeArray[Num].animeSine+']').addClass('anime_start').on('transitionend', function() {
					complateAnime(Num,$(this));
				});;
			} 
		}

		startAnime(0);
		

    return(this);
  };
})(jQuery);