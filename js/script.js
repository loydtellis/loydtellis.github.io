$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      
      
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      $('html').css("scrollBehavior", "smooth");
  });

  

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

 
  
  var typed = new Typed(".typing", {
      strings: ["Test Engineer by day.", "Front-end developer by night."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });


});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}