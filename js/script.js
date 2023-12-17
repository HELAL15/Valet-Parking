

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

  const elementsArray = [
    document.getElementById('overlay'),
    document.getElementById('my-video'),
    document.getElementById('play'),
    document.getElementById('pause'),
    document.getElementById('poster')
  ];
  
  let overlay = elementsArray[0];
  let video = elementsArray[1];
  let play_btn = elementsArray[2];
  let pause_btn = elementsArray[3];
  let poster = elementsArray[4];
  
  pause_btn !== null ? pause_btn.style.display = 'none' : '';
  let none = pause_btn !== null ? pause_btn.style.display = 'none' : '';;

  let isPlaying = true;

  none ? isPlaying = true : isPlaying = false ;

if(play_btn !== null){ 

/*============ play video ================*/
const for_play = ()=>{
  play_btn.style.display = 'none';
  pause_btn.style.display = 'block';
  poster.style.display = 'none';
  isPlaying = false
  overlay.classList.remove('show');
}

  const play_video = ()=>{
    if(isPlaying){
      video.play();
      for_play();
    }
  }

  play_btn.onclick = ()=> {play_video()}

  /*===========================================*/

      /*===== pause video ======*/

const for_pause = ()=>{
  isPlaying = true
  overlay.classList.add('show');
  pause_btn.style.display = 'none'
  play_btn.style.display = 'block'
  poster.style.display = 'block'
}
  const pause_video = ()=>{
    if(!isPlaying){
      video.pause();
      for_pause();
    }
  }

  pause_btn.onclick = ()=> {pause_video()}
  video.onclick = ()=>{pause_video()}

// =================================================*/
}


$(document).ready(function() {
  $('select').niceSelect();
});

$(".flatpickr-input").flatpickr();


new WOW().init();


/*=======================================*/


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
