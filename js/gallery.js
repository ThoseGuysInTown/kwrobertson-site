var main = function() {


	// for Image loading
	function imgLoaded(img){
    	var art = img.parentNode;
    	art.className += art.className ? ' loaded' : 'loaded';
	};
};

$(document).ready(main);