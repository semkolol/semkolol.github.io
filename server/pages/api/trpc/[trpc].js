"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829,748];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 7459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5445);
/* harmony import */ var _server_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2622);
/* harmony import */ var _server_router_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_router__WEBPACK_IMPORTED_MODULE_1__]);
_server_router__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/pages/api/trpc/[trpc].ts



// export API handler
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _server_router__WEBPACK_IMPORTED_MODULE_1__/* .appRouter */ .q,
    createContext: _server_router_context__WEBPACK_IMPORTED_MODULE_2__/* .createContext */ .k
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ authRouter)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6368);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8276);


const authRouter = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .createRouter */ .p)().query("getSession", {
    resolve ({ ctx  }) {
        return ctx.session;
    }
}).middleware(async ({ ctx , next  })=>{
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_0__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    return next();
}).query("getSecretMessage", {
    async resolve ({ ctx  }) {
        return "You are logged in and can see this secret message!";
    }
});


/***/ }),

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createContext),
/* harmony export */   "p": () => (/* binding */ createRouter)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6368);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5677);
/* harmony import */ var _db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4206);
// src/server/router/context.ts




const createContext = async (opts)=>{
    const req = opts?.req;
    const res = opts?.res;
    const session = req && res && await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.unstable_getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);
    return {
        req,
        res,
        session,
        prisma: _db_client__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._
    };
};
const createRouter = ()=>_trpc_server__WEBPACK_IMPORTED_MODULE_0__.router();


/***/ }),

/***/ 3143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ exampleRouter)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8276);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);
zod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const exampleRouter = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p)().query("hello", {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        text: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullish()
    }).nullish(),
    resolve ({ input  }) {
        return {
            greeting: `Hello ${input?.text ?? "world"}`
        };
    }
}).query("getAll", {
    async resolve ({ ctx  }) {
        return await ctx.prisma.example.findMany();
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8276);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3143);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_example__WEBPACK_IMPORTED_MODULE_2__]);
_example__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/server/router/index.ts




const appRouter = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p)().transformer((superjson__WEBPACK_IMPORTED_MODULE_1___default())).merge("example.", _example__WEBPACK_IMPORTED_MODULE_2__/* .exampleRouter */ .z).merge("auth.", _auth__WEBPACK_IMPORTED_MODULE_3__/* .authRouter */ .m);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445,677], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();