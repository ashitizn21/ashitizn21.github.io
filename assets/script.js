$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navBar").addClass("sticky");
        } else{
            $(".navBar").removeClass("sticky");
        }
    })

    $(".menu-btn").click(function(){
        $(".navBar .menu").toggleClass("active");

        $(".menu-btn i").toggleClass("active");
    });
   
});