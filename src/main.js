let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

var swiper = new Swiper('.review-slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// Accordion

$(document).ready(function () {
  $('.accordion-title').click(function (e) {
    var accordionitem = $(this).attr('data-tab');
    $('#' + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find('.accordion-content')
      .slideUp();

    $(this).toggleClass('active-title');
    $('#' + accordionitem)
      .parent()
      .siblings()
      .find('.accordion-title')
      .removeClass('active-title');

    $('i.fa-chevron-down', this).toggleClass('chevron-top');
    $('#' + accordionitem)
      .parent()
      .siblings()
      .find('.accordion-title i.fa-chevron-down')
      .removeClass('chevron-top');
  });
});
