(function($) {
	$.fn.autoClass = function(options){

		c = $.extend({
			autoClass : {},
			type : 'normal'
		},options);

		type = c.type;


		var $animeSine = $(this);
		var animeCount = $animeSine.length;
		var animeArray = []

		//配列の作成
		$animeSine.each(function (i) {
			n = i + 1;
			animeArray[i] = $('[data-anime-sine='+n+']').data();
		});


		autoClass = {
			normal : function() {
				startAnime(0);
			}
		};



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


		autoClass[type]();
		//startAnime(0);


    return(this);
  };
})(jQuery);