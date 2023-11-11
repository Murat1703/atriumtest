new Swiper('.main-slider-list-content', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: false,
    navigation: {
        nextEl: ".main-slider-next",
        prevEl: ".main-slider-prev",
    }, 
    pagination: {
        el: ".main-slider-counter",
        type: 'custom',
        renderCustom: function(swiper, current, total){
            return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
        }
    },   
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 30,
        },
        // desktop >= 991
        960: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 32,
        },
      }
    
});

new Swiper('.projects-slider-list', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 55,
    centeredSlides: false,
    navigation: {
        nextEl: ".projects-slider-next",
        prevEl: ".projects-slider-prev",
    }, 
    pagination: {
        el: ".projects-counter",
        type: 'custom',
        renderCustom: function(swiper, current, total){
            return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
        }
    },   
});

new Swiper('.international-slider-list', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 55,
    centeredSlides: true,
    navigation: {
        nextEl: ".international-slider-next",
        prevEl: ".international-slider-prev",
    }, 
    pagination: {
        el: ".international-slider-counter",
        type: 'custom',
        renderCustom: function(swiper, current, total){
            return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
        }
    },   
});

new Swiper('.complex-slider-list', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 55,
    centeredSlides: true,
    navigation: {
        nextEl: ".complex-slider-next",
        prevEl: ".complex-slider-prev",
    }, 
    pagination: {
        el: ".complex-slider-counter",
        type: 'custom',
        renderCustom: function(swiper, current, total){
            return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
        }
    },   
});