/*onst container=document.querySelectorAll('.container');
const tl = new TimelineMax();
tl.fromTo(container,1,{height:"0%"},{height:"100%"});
const textarea=document.querySelector("textarea");
textarea.addEventListener("keyup", e=>{
    let scHeight=e.target.scrollHeight;
    textarea.style.height=`${scHeight}px`;
});*/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 62,
    loop: false,
    centerSlider: 'true',
    fade: 'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0: {
        slidesPerView:1,
      },
      520: {
        slidesPerView:2,
      },
      950: {
        slidesPerView:3,
      },
    },
  });

  