window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stickyNav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(document).ready(function(){
    // $(window).scroll(function(){

    //     if(this.scrollY > 530 ){  //&& this.width() 
    //         $(".navBar").addClass("sticky");
    //     }
    //     else{
    //         $(".navBar").removeClass("sticky");
    //     }
    //     // if(this.scrollY > 20){
    //     //     $(".navBar").addClass("sticky");
    //     // } else{
    //     //     $(".navBar").removeClass("sticky");
    //     // }

    //     // if(this.scrollY > 500){
    //     //     $('.scroll-up-btn').addClass("show");
    //     // }else{
    //     //     $('.scroll-up-btn').removeClass("show");
    //     // }
    // });

    $(".menu-btn").click(function(){
        $(".newNavBar .menu").toggleClass("active");

        $(".menu-btn i").toggleClass("active");
    });
   
    var typed = new Typed(".typing", {
        strings: ["Python Developer", "Web Developer", "Competitive Programmer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing_2", {
        strings: ["Python Developer", "Web Developer", "Competitive Programmer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.scroll-up-btn').click(function(){  
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

    // $('[data-toggle="tooltip"]').tooltip();

});
