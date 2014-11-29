$(document).ready(function(){

    /*  Testimonials Slider  */
	$('#slider').carouFredSel({
            circular : true,
            infinite: false,
            responsive : true,
            scroll : {
                items : 1,
                fx : "fade",
                duration: 1000,
                pauseOnHover: true
            },
            pagination: {
				container:	"#t_navigation",
				anchorBuilder:	function(nr){
					return '<a href="#'+nr+'"></a>';
				}
			}
    });

    $('#regis').click(function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#reg').css('display', 'block').animate({opacity: 1, top: '30%'}, 200);
            });
    });

    $('#log').click(function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#login').css('display', 'block').animate({opacity: 1, top: '30%'}, 200);
            });
    });

    $('.modal_close').click(function(event){
        event.preventDefault();
        $('.modal').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
        });
    });

    $('#overlay').click(function(event){
        event.preventDefault();
        $('.modal').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
        });
    });


    /*  hide-show mobile menu  */
    // $("#menu_icon").click(function(){
    //     $("#nav_menu").toggleClass("show_menu");
    //     return false;
    // });

});



