"use strict";
exports.id = 8544;
exports.ids = [8544];
exports.modules = {

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AO": () => (/* binding */ videoSlider),
/* harmony export */   "Ky": () => (/* binding */ teamSliderOne),
/* harmony export */   "cK": () => (/* binding */ projectsSliderOne),
/* harmony export */   "cg": () => (/* binding */ heroSliderOne),
/* harmony export */   "g2": () => (/* binding */ testimonialSliderFour),
/* harmony export */   "gV": () => (/* binding */ partnerSliderTwo),
/* harmony export */   "iM": () => (/* binding */ recentProductSlider),
/* harmony export */   "kH": () => (/* binding */ testimonialSliderOne),
/* harmony export */   "m4": () => (/* binding */ testimonialSliderThree),
/* harmony export */   "pP": () => (/* binding */ testimonialSliderTwo),
/* harmony export */   "sW": () => (/* binding */ gallerySlider),
/* harmony export */   "uZ": () => (/* binding */ partnerSliderOne),
/* harmony export */   "v6": () => (/* binding */ projectsSliderTwo)
/* harmony export */ });
/* unused harmony export serviceSliderOne */
const serviceSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};
const projectsSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const testimonialSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
const partnerSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};
const heroSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }
    ]
};
const projectsSliderTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const testimonialSliderThree = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => (
    //   <div className="w-100">
    //     <div className="testimonial-dots">
    //       <ul className="slick-dots">{dots}</ul>
    //     </div>
    //   </div>
    // ),
    responsive: [
        {
            breakpoint: 991,
            settings: {
                dots: false
            }
        }
    ]
};
const partnerSliderTwo = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};
const testimonialSliderFour = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    centerMode: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false
            }
        }
    ]
};
const teamSliderOne = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const gallerySlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const videoSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
};
const recentProductSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const testimonialSliderTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1
};


/***/ })

};
;