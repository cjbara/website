
$(document).ready(function() {

       $(".nav a").on("click", function(){
              $(".nav").find(".active").removeClass("active");
              $(this).parent().addClass("active");
       });
       $(".navbar-header a").on("click", function(){
              $(".nav").find(".active").removeClass("active");
       });

       $("#ghostbutton").on("click", function() {
              console.log('Button');
           $("#pacmanModal").removeClass("fade").modal("hide");
           $("#ghostModal").modal("show").addClass("fade");
       });
});