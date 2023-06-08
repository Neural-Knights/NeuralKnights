"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ "(api)/./database/connect.ts":
/*!*****************************!*\
  !*** ./database/connect.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    const uri = \"mongodb+srv://NeuralKnightsEdu:WXQrOT0CjCRtGvBG@cluster0.n6dtgq7.mongodb.net/auth\";\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        if (connection.readyState == 1) {\n            console.log(\"MongoDB Connected\");\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25uZWN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZLFVBQVk7SUFDN0IsTUFBTUMsTUFBTUMsbUZBQW1DO0lBQy9DLElBQUk7UUFDSCxNQUFNLEVBQUVHLFdBQVUsRUFBRSxHQUFHLE1BQU1OLHVEQUFnQixDQUFDRTtRQUM5QyxJQUFJSSxXQUFXRSxVQUFVLElBQUksR0FBRztZQUMvQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT0MsUUFBUUMsT0FBTyxDQUFDLElBQUk7UUFDNUIsQ0FBQztJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNmLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0Q7SUFDdkI7QUFDRDtBQUVBLGlFQUFlWixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1cmFsa25pZ2h0cy8uL2RhdGFiYXNlL2Nvbm5lY3QudHM/YjdlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkgYXMgc3RyaW5nO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuXHRcdGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfVVJJIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/connect.ts\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (false) {}\nconst uri = \"mongodb+srv://NeuralKnightsEdu:WXQrOT0CjCRtGvBG@cluster0.n6dtgq7.mongodb.net/auth\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxLQUFvQyxFQUFFLEVBRXpDO0FBRUQsTUFBTUssTUFBTUosbUZBQW1DO0FBQy9DLE1BQU1LLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMzQyxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQ2hDSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDNUMsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUMzQyxPQUFPLEVBR047QUFFRCxpRUFBZUYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldXJhbGtuaWdodHMvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcblx0aWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG5cdFx0Y2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcblx0XHRnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcblx0fVxyXG5cdGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuXHRjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuXHRjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./model/registration.ts":
/*!*******************************!*\
  !*** ./model/registration.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String\n    },\n    role: {\n        type: String,\n        default: \"Student\"\n    }\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9yZWdpc3RyYXRpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDN0JJLE1BQU07UUFDTEMsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO0lBQ2Y7SUFDQUMsT0FBTztRQUNOSCxNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDZjtJQUNBRSxVQUFVO1FBQ1RKLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNmO0lBQ0FHLE9BQU87UUFDTkwsTUFBTUM7SUFDUDtJQUNBSyxNQUFNO1FBQ0xOLE1BQU1DO1FBQ05NLFNBQVM7SUFDVjtBQUNEO0FBRUEsTUFBTUMsUUFBUVgsaURBQVcsSUFBSUQsK0NBQUtBLENBQUMsUUFBUUU7QUFFM0MsaUVBQWVVLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXVyYWxrbmlnaHRzLy4vbW9kZWwvcmVnaXN0cmF0aW9uLnRzPzlkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0bmFtZToge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0fSxcclxuXHRlbWFpbDoge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0fSxcclxuXHRwYXNzd29yZDoge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0fSxcclxuXHRpbWFnZToge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdH0sXHJcblx0cm9sZToge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0ZGVmYXVsdDogXCJTdHVkZW50XCIsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBVc2VycyA9IG1vZGVscy51c2VyIHx8IG1vZGVsKFwidXNlclwiLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJ1c2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJpbWFnZSIsInJvbGUiLCJkZWZhdWx0IiwiVXNlcnMiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/registration.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _model_registration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/model/registration */ \"(api)/./model/registration.ts\");\n/* harmony import */ var _database_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/database/connect */ \"(api)/./database/connect.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"852540585773-in6n4e43p34nl7tjmq2umol8an4af7qp.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: \"cUpTU2kwN3U3dzY0ZFhBYjZhSDQ6MTpjaQ\",\n            clientSecret: \"JztOZ7OebHrVW75S_Ld4FxjhWQ4DBInlv5icNhgovpDH_hIqQx\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            async authorize (credential, req) {\n                (0,_database_connect__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().catch((error)=>{\n                    error: {\n                        \"Connection Failed ...\";\n                    }\n                });\n                const user = await _model_registration__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n                    email: credential.email\n                });\n                if (!user) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.error(\"No User Found in Database\");\n                    throw new Error(\"No User Found in Database\");\n                }\n                if (user.email === credential.email) {\n                    const checkpass = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_8__.compare)(credential.password, user.password);\n                    if (!checkpass) {\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.error(\"Invalid Details\");\n                        throw new Error(\"Invalid Details\");\n                    } else {\n                        return user;\n                    }\n                } else {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.error(\"Invalid Details\");\n                    throw new Error(\"Invalid Details\");\n                }\n            }\n        })\n    ],\n    // callbacks: {\n    // \tasync jwt({ token, user }) {\n    // \t\treturn { ...token, ...user };\n    // \t},\n    // \tasync session({ session, token }) {\n    // \t\tsession.user = token;\n    // \t\treturn session;\n    // \t},\n    // },\n    secret: \"hhryrae5a#yhry!ed53t53rt6yyh6y46ter#\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNFO0FBQ0U7QUFDUTtBQUNOO0FBQ2xCO0FBQ0Q7QUFDRTtBQUNSO0FBQ0s7QUFFakMsTUFBTVcsY0FBYztJQUMxQkMsU0FBU1AsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQ08sV0FBVztRQUNWWCxpRUFBY0EsQ0FBQztZQUNkWSxVQUFVQywwRUFBdUM7WUFDakRHLGNBQWNILHFDQUFxQztRQUNwRDtRQUNBWixrRUFBZUEsQ0FBQztZQUNmVyxVQUFVQyxvQ0FBd0M7WUFDbERHLGNBQWNILG9EQUFzQztRQUNyRDtRQUNBWCxzRUFBbUJBLENBQUM7WUFDbkJrQixNQUFNO1lBQ04sTUFBTUMsV0FBVUMsVUFBVSxFQUFFQyxHQUFHLEVBQUU7Z0JBQ2hDakIsNkRBQVNBLEdBQUdrQixLQUFLLENBQUMsQ0FBQ0MsUUFBVTtvQkFDNUJBLE9BQU87d0JBQ0w7b0JBQ0Y7Z0JBQ0Q7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNckIsbUVBQWEsQ0FBQztvQkFDaEN1QixPQUFPTixXQUFXTSxLQUFLO2dCQUN4QjtnQkFDQSxJQUFJLENBQUNGLE1BQU07b0JBQ1ZsQix3REFBVyxDQUFDO29CQUNaLE1BQU0sSUFBSXFCLE1BQU0sNkJBQTZCO2dCQUM5QyxDQUFDO2dCQUNELElBQUlILEtBQUtFLEtBQUssS0FBS04sV0FBV00sS0FBSyxFQUFFO29CQUNwQyxNQUFNRSxZQUFZLE1BQU12QixpREFBT0EsQ0FBQ2UsV0FBV1MsUUFBUSxFQUFFTCxLQUFLSyxRQUFRO29CQUNsRSxJQUFJLENBQUNELFdBQVc7d0JBQ2Z0Qix3REFBVyxDQUFDO3dCQUNaLE1BQU0sSUFBSXFCLE1BQU0sbUJBQW1CO29CQUNwQyxPQUFPO3dCQUNOLE9BQU9IO29CQUNSLENBQUM7Z0JBQ0YsT0FBTztvQkFDTmxCLHdEQUFXLENBQUM7b0JBQ1osTUFBTSxJQUFJcUIsTUFBTSxtQkFBbUI7Z0JBQ3BDLENBQUM7WUFDRjtRQUNEO0tBQ0E7SUFDRCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxNQUFNO0lBRU4sdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsTUFBTTtJQUNOLEtBQUs7SUFDTEcsUUFBUW5CLHNDQUE4QjtBQUN2QyxFQUFFO0FBQ0YsaUVBQWVmLGdEQUFRQSxDQUFDVyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1cmFsa25pZ2h0cy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBUd2l0dGVyUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvdHdpdHRlclwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIkAvbW9kZWwvcmVnaXN0cmF0aW9uXCI7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIkAvZGF0YWJhc2UvY29ubmVjdFwiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG5cdGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0R29vZ2xlUHJvdmlkZXIoe1xyXG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVElELFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9TRUNSRVQsXHJcblx0XHR9KSxcclxuXHRcdFR3aXR0ZXJQcm92aWRlcih7XHJcblx0XHRcdGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UV0lUVEVSX0NMSUVOVElELFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RXSVRURVJfU0VDUkVULFxyXG5cdFx0fSksXHJcblx0XHRDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuXHRcdFx0bmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG5cdFx0XHRhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbCwgcmVxKSB7XHJcblx0XHRcdFx0Y29ubmVjdERCKCkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRlcnJvcjoge1xyXG5cdFx0XHRcdFx0XHQoXCJDb25uZWN0aW9uIEZhaWxlZCAuLi5cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe1xyXG5cdFx0XHRcdFx0ZW1haWw6IGNyZWRlbnRpYWwuZW1haWwsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKCF1c2VyKSB7XHJcblx0XHRcdFx0XHR0b2FzdC5lcnJvcihcIk5vIFVzZXIgRm91bmQgaW4gRGF0YWJhc2VcIik7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIEZvdW5kIGluIERhdGFiYXNlXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodXNlci5lbWFpbCA9PT0gY3JlZGVudGlhbC5lbWFpbCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY2hlY2twYXNzID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFsLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHRcdFx0XHRcdGlmICghY2hlY2twYXNzKSB7XHJcblx0XHRcdFx0XHRcdHRvYXN0LmVycm9yKFwiSW52YWxpZCBEZXRhaWxzXCIpO1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIERldGFpbHNcIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dG9hc3QuZXJyb3IoXCJJbnZhbGlkIERldGFpbHNcIik7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIERldGFpbHNcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHQvLyBjYWxsYmFja3M6IHtcclxuXHQvLyBcdGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuXHQvLyBcdFx0cmV0dXJuIHsgLi4udG9rZW4sIC4uLnVzZXIgfTtcclxuXHQvLyBcdH0sXHJcblxyXG5cdC8vIFx0YXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuXHQvLyBcdFx0c2Vzc2lvbi51c2VyID0gdG9rZW47XHJcblx0Ly8gXHRcdHJldHVybiBzZXNzaW9uO1xyXG5cdC8vIFx0fSxcclxuXHQvLyB9LFxyXG5cdHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VDUkVULFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIk5leHRBdXRoT3B0aW9ucyIsIkdvb2dsZVByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsIlVzZXJzIiwiY29ubmVjdERCIiwiY29tcGFyZSIsInRvYXN0IiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVElEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfR09PR0xFX1NFQ1JFVCIsIk5FWFRfUFVCTElDX1RXSVRURVJfQ0xJRU5USUQiLCJORVhUX1BVQkxJQ19UV0lUVEVSX1NFQ1JFVCIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFsIiwicmVxIiwiY2F0Y2giLCJlcnJvciIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJFcnJvciIsImNoZWNrcGFzcyIsInBhc3N3b3JkIiwic2VjcmV0IiwiTkVYVF9QVUJMSUNfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();