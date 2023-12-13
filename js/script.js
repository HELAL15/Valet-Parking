

var nav_links = document.querySelectorAll('.nav-link');

nav_links.forEach((link) => {
  link.addEventListener('click', () => {
    nav_links.forEach((link)=>{
      link.classList.remove('active')
      nav.removeClass('active')
    })
    link.classList.add('active');
  });
});

// ==== navbar toggler ======
let open_nav = $('#open');
let close_nav = $('#close');
let nav = $('.navbar-collapse');

open_nav.click(function () {
    nav.addClass("active");
})

close_nav.click(function () {
    nav.removeClass('active')
});

$(document).on('click' , (e)=>{
  !$(e.target).closest('.navbar').length ? nav.removeClass("active") : '';
})

function changeBG() {
  let scroll = window.scrollY;
  let isNavTop = scroll < 80;
  let nav = document.getElementById('nav');
  if ( isNavTop) {
    nav.classList.remove('shadow'); 
  } else {
    nav.classList.add('shadow');
  }
}
window.addEventListener('scroll', changeBG);



/*================================================
================== cart ==========================
=================================================*/


  var overlay = document.getElementById('overlay');
  var video = document.getElementById('my-video');
  var play_btn = document.getElementById('play');
  var pause_btn = document.getElementById('pause');
  var poster = document.getElementById('poster');
  
  pause_btn.style.display = 'none'
  play_btn.style.display = 'block'
  
  play_btn.onclick = ()=> {
    overlay.classList.remove('show');
      video.play();
      play_btn.style.display = 'none'
      pause_btn.style.display = 'block'
      poster.style.display = 'none'
  }

  pause_btn.onclick = ()=> {
    overlay.classList.add('show');
      video.pause();
      pause_btn.style.display = 'none'
      play_btn.style.display = 'block'
      poster.style.display = 'block'
  }






$(".flatpickr-input").flatpickr();


new WOW().init();








const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rtl') {
  rtlValue = true;
}



$('.owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  center: true,
  margin:10,
  navText:["<i class='fa-solid fa-arrow-right mx-2'></i>", "<i class='fa-solid fa-arrow-left mx-2'></i>"],
  nav:true,
  dots: false,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})



/*===========================================================*/
