jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
	$.ajax({
	  type: "GET",
	  dataType: "jsonp",
		cache: false,
	    url:"https://api.instagram.com/v1/users/37047770/media/recent?count=33&client_id=95e6922266da418a88cae604222b7d76",
	  success: function(data) {
	    for (var i = 0; i < 10; i++) {
	      $(".instagram_img").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
	    }
	  }
	});
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var half = $(window).height(); 
    if (scroll >= (half/2)) {
        $(".top ").addClass("scrolling");
    } else {
        $(".top ").removeClass("scrolling");
    }
});
