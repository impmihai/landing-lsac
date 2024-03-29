(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();

    $('#presentation').load('pages/presentation.html')
    $('#parteners').load('pages/parteners.html')
    $('#signup').load('pages/signup.html')
    $('#contact').load('pages/contact.html')
    $('#events').load('pages/events.html')

    $(window).on('scroll', function (event) {
        var scroll = $(this).scrollTop()
        if(scroll > 100) {
            $('#nav').removeClass('transparent-grey')
            $('#nav').addClass('white-black-text')
        } else {
            $('#nav').removeClass('white-black-text')
            $('#nav').addClass('transparent-grey')
        }
    });
    $('window.hash')
    $('#nav a').on('click tap', function(e){
        e.preventDefault();
        if(history.pushState) {
            history.pushState(null, null, this.hash);
        }
        else {
            location.hash = this.hash;
        }
        var target = this.hash;
    	var $target = $(target);
        if($target.length)
            $('html, body').stop().animate({
        	    'scrollTop': $target.offset().top
        	}, 1200, 'linear');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
