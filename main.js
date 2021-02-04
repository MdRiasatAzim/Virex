//Navbar Submenu

$(document).ready(function() {
    
  // Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
          $('.dropdown-menu a').click(function(e){
              e.preventDefault();
            if($(this).next('.submenu').length){
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
               $(this).find('.submenu').hide();
            })
          });
    }
    
});


//Icon Counter

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    }else{
      count.innerText = target;
    }
  }

  updateCount();
});

// Video

var myVideo = document.getElementById("video"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
}

$(".play").click(function(){
  $(this).toggleClass("pause")  ; 
 })

 //Slider

 $('#recipeCarousel').carousel({
  interval: 3000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});