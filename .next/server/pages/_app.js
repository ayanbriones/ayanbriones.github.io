(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header.js



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "logo",
                children: "Portfolio"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Nav.js


function Nav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        id: "nav",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "links",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "active",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "index.html",
                        children: "Projects"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "icons",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/ayanbriones",
                            className: "icon brands fa-github",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "label",
                                children: "GitHub"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/in/ayanbriones/",
                            className: "icon brands fa-linkedin",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "label",
                                children: "LinkedIn"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Intro.js


function Intro() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "intro",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "BRYANTH BRIONES"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Passionate in computer programming and technology"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "actions",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#header",
                        className: "button icon solid solo fa-arrow-down scrolly",
                        children: "Continue"
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    method: "post",
                    action: "#",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fields",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "field",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "name",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "name",
                                            id: "name"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "field",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "email",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "email",
                                            id: "email"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "field",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "message",
                                            children: "Message"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "message",
                                            id: "message",
                                            rows: "3"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "actions",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "submit",
                                    value: "Send Message"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Social"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "icons alt",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://github.com/ayanbriones",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "icon brands alt fa-github",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "label",
                                            children: "GitHub"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://www.linkedin.com/in/ayanbriones/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "icon brands alt fa-linkedin",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "label",
                                            children: "LinkedIn"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Copyright.js


function Copyright() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "copyright",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: "\xa9"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        "Design: ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://html5up.net",
                            children: "HTML5 UP"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout.js







const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "wrapper",
        className: "fade-in",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Portfolio - Bryanth Briones"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Intro, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "main",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(699)


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(1424)));
module.exports = __webpack_exports__;

})();