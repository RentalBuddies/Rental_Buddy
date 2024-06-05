var swiperOptions = {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 7,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false
};

var swiper = new Swiper(".swiper-container", swiperOptions);