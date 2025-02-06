
const swiper = new Swiper('. swiper-wrapper', {
    // Optional parameters
    grabCursor:true,
    spaceBetween: 90,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   
  });