$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navBar").addClass("sticky");
        } else{
            $(".navBar").removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(".menu-btn").click(function(){
        $(".navBar .menu").toggleClass("active");

        $(".menu-btn i").toggleClass("active");
    });
   
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Competitive Programmer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing_2", {
        strings: ["Web Developer", "Competitive Programmer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.scroll-up-btn').click(function(){  
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

});