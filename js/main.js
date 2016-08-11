jQuery(document).ready(function($) {
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event) {
		if ($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
  		// url: "https://www.instagram.com/oauth/authorize/?client_id=d5893d8fdc884db6b149359aca01b320&redirect_uri=https://rocklai1207.github.io/Rock-website/&response_type=code",
  		// url: "https://www.instagram.com/oauth/authorize/?client_id=95e6922266da418a88cae604222b7d76&redirect_uri=http://localhost&response_type=code",
	$.ajax({
	  		url: "https://www.instagram.com/oauth/authorize/?client_id=d5893d8fdc884db6b149359aca01b320&redirect_uri=https://rocklai1207.github.io/Rock-website/&response_type=code",
	        beforeSend: function(xhr) {
	             xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
	        }, success: function(data){
	 if (data.redirect) {
            // data.redirect contains the string URL to redirect to
            window.location.href = data.redirect;
        }
	 //     alert(JSON.stringify(data));
	            //process the JSON data etc
	        },
	    error: function (data) {
	      alert(JSON.stringify(data));
	    }
	})

	// $.ajax({
	// 	type: "GET",
	// 	dataType: "jsonp",
	// 	cache: false,
	// 	url: "https://api.instagram.com/v1/users/37047770/media/recent?count=33&client_id=95e6922266da418a88cae604222b7d76",
	// 	success: function(data) {
	// 		for (var i = 0; i < 10; i++) {
	// 			$(".instagram_img").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
	// 		}
	// 	}
	// });
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var half = $(window).height();
	if (scroll >= (half / 2)) {
		$(".top ").addClass("scrolling");
	} else {
		$(".top ").removeClass("scrolling");
	}
});
