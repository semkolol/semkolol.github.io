"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@trpc/react"
var react_ = __webpack_require__(1782);
;// CONCATENATED MODULE: ./src/utils/trpc.ts

const trpc = (0,react_.createReactQueryHooks)(); /**
 * Check out tRPC docs for Inference Helpers
 * https://trpc.io/docs/infer-types#inference-helpers
 */ 

;// CONCATENATED MODULE: ./src/assets/images/logo.jpg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.069145da.jpg","height":600,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALQdv//EABwQAAEDBQAAAAAAAAAAAAAAABMAEhQBBBExgf/aAAgBAQABPwCdaQBuoQ2Obcv/xAAZEQADAAMAAAAAAAAAAAAAAAABAhEAEiH/2gAIAQIBAT8ARyu0nWJz/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAITYf/aAAgBAwEBPwCjYf/Z"});
;// CONCATENATED MODULE: ./src/assets/images/bvey.png
/* harmony default export */ const bvey = ({"src":"/_next/static/media/bvey.0afb1a8f.png","height":1100,"width":1100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEUKwY4KwY0KwI4KwI0KwY4KwY0KwI4KwI0KwI0KwY4KwI4KwY4KwY0KwY4KwI4KwY0KwY4KwI4KwY4KwI4KwY4KwY4KwY4KwI0KwI0KwI4KwI0KwY4KwI4KwI4KwY5ViXcOAAAAH3RSTlMAAAAAAQEBAQMEBAUFBgcIDhAaUldeX2BhYmJlbX2BoZGMJAAAAEFJREFUeNoNyUcCgCAMAMElARt2Jdj//0yZ6wCMSBA8lz2LehhO3VYC4t79S1pDl+fpbgT6A6xVKnIyK6WOGEXkB1iMAnfUnM2pAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/vivey.png
/* harmony default export */ const vivey = ({"src":"/_next/static/media/vivey.9c115576.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAkklEQVR42nWOMQ6CQBBFB06hUSsSLQ2WxprW7EbhEhyDCkrooYEAF4CrQcWbAiqY5OW/mdndrMzWunJQszHuKicOBmSsTMYE9GfRovFperIjffJJtmRPvgSpkQg8GHhhBI95CI0wfEMxWftlUOKVOuTwEQYXSGge3Pzhyh1PyJtoIVdd8kKKZ/Dfliwc2S/9n7MApMJdvX15dcAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/nymn0.png
/* harmony default export */ const nymn0 = ({"src":"/_next/static/media/nymn0.550168df.png","height":577,"width":1040,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbUlEQVR42mPwsbZNs3UKTcirnb2ma/aaCbPXOHvHNE9axqDvYBCYpsGgKWvgqquuoMbAwCCozR9izsCgoq6jZGSgoK7j5Bbk6BigoGGib2dqb2vCIC+hrSSupyZvIiuuLyuqra5grCCkLyqgAwBxghadQKIHUQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/pages/index.tsx










const Home = ()=>{
    const hello = trpc.useQuery([
        "example.hello",
        {
            text: "from tRPC"
        }
    ]);
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Semko"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Updates about my projects and socials"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${theme && "dark"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white dark:bg-gray-900 transition-all",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute mt-3 left-0 right-0 ml-auto mr-auto rounded-lg p-1 justify-center items-center max-w-fit bg-gray-200 dark:bg-gray-600",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 m-1 rounded-xl bg-orange-600 text-gray-200 dark:bg-orange-700 hover:opacity-80 transition-all",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "icon icon-tabler icon-tabler-home",
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "2",
                                            stroke: "currentColor",
                                            fill: "none",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                                                    children: "Download more icon variants from https://tabler-icons.io/i/home"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M0 0h24v24H0z",
                                                    fill: "none"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                    points: "5 12 3 12 12 3 21 12 19 12"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/semkolol",
                                    target: "_noopener",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 m-1 rounded-xl bg-cyan-500 text-gray-200 dark:bg-cyan-600 hover:opacity-80 transition-all",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "icon icon-tabler icon-tabler-brand-twitter",
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "2",
                                            stroke: "currentColor",
                                            fill: "none",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                                                    children: "Download more icon variants from https://tabler-icons.io/i/brand-twitter"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M0 0h24v24H0z",
                                                    fill: "none"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://github.com/semkolol",
                                    target: "_noopener",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 m-1 rounded-xl bg-stone-600 text-gray-200 dark:bg-stone-700 hover:opacity-80 transition-all",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "icon icon-tabler icon-tabler-brand-github",
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "2",
                                            stroke: "currentColor",
                                            fill: "none",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                                                    children: "Download more icon variants from https://tabler-icons.io/i/brand-github"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M0 0h24v24H0z",
                                                    fill: "none"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://semkou.itch.io/",
                                    target: "_noopener",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 m-1 rounded-xl bg-rose-500 text-gray-200 dark:bg-rose-600 hover:opacity-80 transition-all",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "30",
                                            height: "30",
                                            viewBox: "8.226 10.91 49.755 44.078",
                                            fill: "#fff",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M14.419 10.91l-6.194 7.742v2.168c0 6.193 10.116 6.193 10.116 0 0 6.193 9.703 6.193 9.703 0 0 6.193 10.116 6.193 10.116 0 0 6.193 9.704 6.193 9.704 0 0 6.193 10.115 6.193 10.115 0v-2.168l-6.193-7.742H14.419zm3.82 13.626c-.31.413-.62.722-.929 1.032-1.135.929-2.581 1.342-4.026 1.342-.413 0-.826 0-1.135-.103v28.181h41.807V26.807c-.413.103-.723.103-1.136.103-1.445 0-2.89-.413-4.026-1.342-.309-.31-.619-.62-.928-1.032-.311.413-.518.722-.93 1.032-1.136.929-2.58 1.342-3.923 1.342-1.444 0-2.89-.413-3.923-1.342-.309-.31-.619-.62-.929-1.032-.31.413-.619.722-.929 1.032-1.341 1.032-2.787 1.445-4.232 1.445s-2.89-.413-4.026-1.342c-.31-.31-.619-.619-.929-1.032-.31.413-.516.723-.929 1.032-1.136.929-2.581 1.342-3.923 1.342-1.445 0-2.89-.413-3.922-1.342-.31-.31-.619-.619-.929-1.032l-.103-.103zm5.574 4.232c2.374 0 3.406.62 4.645 3.097h9.187c.517-2.477 1.549-3.097 4.646-3.097 2.373 0 6.399 2.271 7.019 5.471l3.097 12.078c.619 3.097-1.135 5.367-4.232 5.367-2.168 0-4.955-1.445-6.812-5.367H24.845c-1.858 4.025-4.645 5.367-6.813 5.367-3.097 0-4.852-2.271-4.232-5.367l3.097-12.078c.619-3.2 4.645-5.471 7.019-5.471h-.103zM33 33l-7.329 7.742h3.097v3.922h8.568v-3.818h3.096L33 33z"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-2 m-1 rounded-xl bg-gray-800 text-gray-200 dark:bg-gray-100 dark:text-gray-700 hover:opacity-80 transition-all",
                                    onClick: ()=>setTheme(!theme),
                                    children: theme === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "icon icon-tabler icon-tabler-sun",
                                        width: "30",
                                        height: "30",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                                                children: "Download more icon variants from https://tabler-icons.io/i/sun"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "icon icon-tabler icon-tabler-moon",
                                        width: "30",
                                        height: "30",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                                                children: "Download more icon variants from https://tabler-icons.io/i/moon"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "min-h-screen flex flex-col justify-center items-center p-4 ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-32 mb-8 flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-full",
                                            src: logo,
                                            alt: "logo",
                                            width: 100,
                                            height: 100
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-1 font-medium dark:text-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "text-black text-3xl dark:text-gray-100 transition-all",
                                                    children: "Semko"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-xl text-gray-600 dark:text-gray-400 transition-all",
                                                    children: "\uD83D\uDCBBIndie Dev \uD83E\uDDD325 years old"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-10 mb-10",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col h-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "text-[2rem] lg:text-[4rem] md:text-[4rem] font-extrabold text-gray-700 dark:text-gray-100",
                                                children: [
                                                    "About ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-purple-400 dark:text-purple-300",
                                                        children: "me"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "https://vivey.net",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        className: "rounded-t-lg mr-1",
                                                                        src: vivey,
                                                                        width: 50,
                                                                        height: 50,
                                                                        alt: "Vivey"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Vivey"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Create a wishlist, get funds from fans"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "https://bvey.xyz",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        className: "rounded-t-lg mr-1",
                                                                        src: bvey,
                                                                        width: 50,
                                                                        height: 50,
                                                                        alt: "Bvey"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Bvey"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Crypto digital marketplace \uD83D\uDD17"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "https://remotefy.de/",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDCBC"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Remotefy"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Find your next Remote job"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "https://localok.co/",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDC4C"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "LocalOK"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Products made in your country \uD83C\uDF0E"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83C\uDFB2"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Dicer"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "A cool card game (not soon)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDED2"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Warefi"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Find cool products \uD83D\uDED2 (soon)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "https://github.com/seloxyyz/deepvalue",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDCCA"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Deepvalue"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Open source crypto screener"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDC68"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "Nymn"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Fangame about nymn (soon)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        target: "_noopener",
                                                        className: "block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "rounded-t-lg text-4xl mr-1",
                                                                        children: "\uD83D\uDC7E"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                        children: "OneV"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-normal text-gray-700 dark:text-gray-400",
                                                                children: "Turn based battle arena. (soon)"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mt-16 text-[2rem] lg:text-[4rem] md:text-[4rem] font-extrabold text-gray-700 dark:text-gray-100",
                                                children: [
                                                    "Up",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-purple-400 dark:text-purple-300",
                                                        children: "dates"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "rounded-t-lg",
                                                                    src: nymn0,
                                                                    alt: "Deepvalue"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                                    children: "NymN"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "p-6 break-normal font-normal text-gray-700 dark:text-gray-400",
                                                            children: "6/13/2022 - Added combat, hurt, run, jump and more animations. Also there is now a simple HUD to show your Health. You now also can kill enemies, they can hurt you and kill you if your health drops to 0 and much more."
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61], () => (__webpack_exec__(9827)));
module.exports = __webpack_exports__;

})();