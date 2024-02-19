"use strict";
exports.id = 5952;
exports.ids = [5952];
exports.modules = {

/***/ 5952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FintexAccordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1370);




const SimpleFaq = ()=>{
    const faqsData = [
        {
            title: "How to Getting Started your Business"
        },
        {
            title: "What is Business & Financial Relationship ?"
        },
        {
            title: "What is Importance of Co-working ?"
        },
        {
            title: "Useful Front-End Boilerplates And Starter Kits"
        }
    ];
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`event-0`);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
        defaultActiveKey: active,
        className: "accordion",
        children: faqsData.map((faq, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FintexAccordion__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                active: active,
                onClick: ()=>setActive(`event-${i}`),
                title: faq.title,
                eventName: `event-${i}`
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleFaq);


/***/ })

};
;