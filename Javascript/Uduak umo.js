AOS.init({
    easing: 'ease-out-back',
	duration: 1000
});


hljs.initHighlightingOnLoad();

$('.hero__scroll').on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 2000);
});


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".main_menu").css("background" , "#1e649d");
        }
  
        else{
            $(".main_menu").css("background" , "transparent");  	
        }
    })
  });

  $(document).ready(function() {

    $(".carousel-move, .s_slider").owlCarousel({
    
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    center: true,
    nav:true,
    loop:true,
    responsive: {
    600: {
    items: 3
    }
    }
    
    });
    
    });

    // TESTIMONIAL SLIDER
    $(document).ready(function() {

        $(".testimonias").owlCarousel({
        
        autoPlay: 3000,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        center: true,
        nav:true,
        loop:true,
        responsive: {
        600: {
        items: 3
        }
        }
        
        
        });
        
    });


$(document).ready(function(){

    $(".filter-link").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});


$(document).ready(function() {
    $('.gallery').magnificPopup({ 
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery:{
            enabled:true,
            navigateByImgClick: true,
			preload: [0,1]
        }
        // other options
    });
 });

    

