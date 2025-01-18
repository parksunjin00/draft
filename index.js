//커서
const $cursor = $('.cursor');
const $cursorShadow = $('.cursor-shadow');

$(window).mousemove(function (e) {
    console.log("e.clientX : " + e.clientX);
    console.log("e.clientY : " + e.clientY);

    $cursor.css({
        left: e.clientX,
        top: e.clientY
    });

    $cursorShadow.css({
        left: e.clientX,
        top: e.clientY
    });
});


$('.cursor-big').mouseenter(function () {
    $('html').addClass('need-to-cursor-big');
});

$('.cursor-big').mouseleave(function () {
    $('html').removeClass('need-to-cursor-big');
});


// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

function HeaderBar__init() {
    var scrub = true;

    gsap.to('.header-bar__logo > span > span.fast1', {
        yPercent: 30,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });

    gsap.to('.header-bar__logo > span > span.fast2', {
        yPercent: 20,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });

    gsap.to('.header-bar__logo > span > span.fast3', {
        yPercent: 10,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });

    gsap.to('.header-bar__logo > span > span.slow1', {
        yPercent: 50,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });

    gsap.to('.header-bar__logo > span > span.slow2', {
        yPercent: 60,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });

    gsap.to('.header-bar__logo > span > span.slow3', {
        yPercent: 70,
        scrollTrigger: {
            trigger: '.header-bar__logo',
            markers: false,
            start: 'top 100px',
            scrub: scrub
        }
    });
}


HeaderBar__init();


//스와이퍼
function MySliderBox1__init() {
    const swiper = new Swiper('.my-slider-box-1 .swiper-container', {
        autoplay: {
            delay: 5000, /* 5초 */
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.my-slider-box-1__nav-btn-right',
            prevEl: '.my-slider-box-1__nav-btn-left',
        },
        pagination: {
            el: ".my-slider-box-1 .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                const no = index + 1;
                const url = 'https://parksunjin00.github.io/draft/img/cs_pbmist_' + no + '.png';
                return '<div class="' + className + '"><img class="block" src="' + url + '"></div>';
                let img = "";
                if (index == 0) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_1.png">';
                }
                else if (index == 1) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_2.png">';
                }
                else if (index == 2) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_3.png">';
                }
                else if (index == 3) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_4.png">';
                }
                else if (index == 4) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_5.png">';
                }
                else if (index == 5) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_6.png">';
                }
                else if (index == 6) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_7.png">';
                }
                else if (index == 7) {
                    img = '<img src ="https://cdn.jsdelivr.net/gh/parksunjin00/draft/img/cs_pbmist_7.png">';
                }

                return '<span class="' + className + ' ">' + img + '</span>';
            },
        },
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true
    });
}

MySliderBox1__init();


//슬라이더
function SectionSlider__init(no) {
    var mySwiper = new Swiper('.section-slider-' + no + ' .swiper-container', {
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.section-slider-' + no + ' .swiper-pagination',
            clickable: true
        },
    });
}
SectionSlider__init(1);