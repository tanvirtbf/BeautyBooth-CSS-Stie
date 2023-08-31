window.addEventListener('scroll',function(){
    if(window.pageYOffset > 200){
        document.body.children[1].style.width = '100%';
        document.body.children[1].style.transition = 'all 0.2s ease-in-out'
    }
    else if(window.pageYOffset <200){
        document.body.children[1].style.width = '90%';
        document.body.children[1].style.transition = 'all 0.2s ease-in-out'
    }
})
var brandBorder = document.querySelector('.brands-top-most');
window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 200){ 
      brandBorder.style.width = '100%';
      brandBorder.style.transition = 'all 0.2s ease-in-out'
  }
  else if(window.pageYOffset <200){ 
    brandBorder.style.width = '90%';
    brandBorder.style.transition = 'all 0.2s ease-in-out';
  }
})
const navLinkEls = document.querySelectorAll('.btn-style');
navLinkEls.forEach(hello =>{
    hello.addEventListener('click', ()=>{
        document.querySelector('.btn-styles')?.classList.remove('btn-styles')
        hello.classList.add('btn-styles')
    })
})
const imgLinkEls = document.querySelectorAll('.small-img');
imgLinkEls.forEach(hello=>{
    hello.addEventListener('click', ()=>{
        document.querySelector('.small-img-js')?.classList.remove('small-img-js')
        hello.classList.add('small-img-js')
    })
})

const alertDelete = document.querySelector('.alert-topbar-btn');
alertDelete.addEventListener('click',function(){
    const hello = document.querySelector('.alert-topbar');
    hello.style.display = 'none'
})
const nextPrev = document.querySelector('#next');
const prevNext = document.querySelector('#prev');
nextPrev.addEventListener('click',function(){
    prevNext.style.display = 'inline-block';
    prevNext.style.display = 'flex';
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
var swiper1 = new Swiper('.swiper-container-1', {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})
var swiper2 = new Swiper('.swiper-container-2', { 
  slidesPerView: 4.7,
  spaceBetween: 18,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
      nextEl: ".next",
      prevEl: ".prev",
  },
  breakpoints:{
    0: {
        slidesPerView: 1.4,
    },
    400:{
        slidesPerView: 2,
    },
    576: {
        slidesPerView: 2.7,
    },
    768: {
        slidesPerView: 3.7,
    },
    992: {
        slidesPerView: 4.7
    }

  }
})

var swiper3 = new Swiper('.swiper-container-3',{
  slidesPerView: 8.9,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    // prevEl: ".prev",
  },
  breakpoints:{
    0: {
        slidesPerView: 2.7,
    },
    400:{
      slidesPerView: 3.1,
    },
    480:{
        slidesPerView: 3.7,
    },
    576: {
        slidesPerView: 4.2,
    },
    768: {
        slidesPerView: 5.9,
    },
    992:{
      slidesPerView: 7.5,
    },
    1200:{
      slidesPerView: 8.2
    },

  }
})
var swiper4 = new Swiper(".swiper-container-4", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints:{
    0: {
        slidesPerView: 1.4,
    },
    400:{
        slidesPerView: 2,
    },
    576: {
        slidesPerView: 2.7,
    },
    768: {
        slidesPerView: 3.7,
    },
    992: {
        slidesPerView: 3
    }

  }
});

let bigImg = document.querySelector(".big-img img");
function showImg(pic) {
  bigImg.src = pic;
}




























