/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Animals/Elephant.ts":
/*!*****************************!*\
  !*** ./Animals/Elephant.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Elephant: () => (/* binding */ Elephant)\n/* harmony export */ });\n/* harmony import */ var _Classes_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Animal */ \"./Classes/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Elephant = /** @class */ (function (_super) {\n    __extends(Elephant, _super);\n    function Elephant(name, age, weight, loggerManager) {\n        var _this = _super.call(this, name, age) || this;\n        _this.weight = weight;\n        _this.loggerManager = loggerManager;\n        return _this;\n    }\n    Elephant.prototype.makeSound = function () {\n        this.loggerManager.log('Elephant makes sound');\n    };\n    Elephant.prototype.sleep = function () {\n        this.loggerManager.log('Elephant sleeps');\n    };\n    Elephant.prototype.walk = function () {\n        this.loggerManager.log('Elephant walks');\n    };\n    return Elephant;\n}(_Classes_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Elephant.ts?");

/***/ }),

/***/ "./Animals/Tiger.ts":
/*!**************************!*\
  !*** ./Animals/Tiger.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tiger: () => (/* binding */ Tiger)\n/* harmony export */ });\n/* harmony import */ var _Classes_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Animal */ \"./Classes/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Tiger = /** @class */ (function (_super) {\n    __extends(Tiger, _super);\n    function Tiger(name, age, wasOutsideInLast8Hours, loggerManager, outOfTheCageTimeStamp) {\n        if (outOfTheCageTimeStamp === void 0) { outOfTheCageTimeStamp = null; }\n        var _this = _super.call(this, name, age) || this;\n        _this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;\n        _this.outOfTheCageTimeStamp = outOfTheCageTimeStamp;\n        _this.loggerManager = loggerManager;\n        return _this;\n    }\n    Tiger.prototype.makeSound = function () {\n        this.loggerManager.log('Tiger makes sound');\n    };\n    Tiger.prototype.jump = function () {\n        this.loggerManager.log('Tiger is jumping');\n    };\n    Tiger.prototype.run = function () {\n        this.loggerManager.log('Tiger is running');\n    };\n    Tiger.prototype.sleep = function () {\n        this.loggerManager.log('Tiger is sleeping');\n    };\n    Tiger.prototype.walk = function () {\n        this.loggerManager.log('Tiger is walking');\n    };\n    Tiger.prototype.swim = function () {\n        this.outOfTheCageTimeStamp = new Date();\n        this.loggerManager.log('Tiger swims');\n        return this.wasOutsideInLast8Hours = true;\n    };\n    Tiger.prototype.hunt = function () {\n        this.outOfTheCageTimeStamp = new Date();\n        this.loggerManager.log('Tiger hunts');\n        return this.wasOutsideInLast8Hours = true;\n    };\n    Tiger.prototype.checkIfwasOutsideInLast8HoursAndSet = function () {\n        if (this.outOfTheCageTimeStamp === null) {\n            this.wasOutsideInLast8Hours = false;\n        }\n        else {\n            var newTimeAndDateStamp = new Date();\n            var timeDifference = newTimeAndDateStamp.getTime() - this.outOfTheCageTimeStamp.getTime();\n            var eightHoursInMillis = 8 * 60 * 60 * 1000;\n            this.wasOutsideInLast8Hours = timeDifference < eightHoursInMillis;\n        }\n        this.loggerManager.log(this.wasOutsideInLast8Hours ? 'Tiger was outside the cage in the past 8h' : 'Tiger was inside the cage in the past 8h');\n        return this.wasOutsideInLast8Hours;\n    };\n    return Tiger;\n}(_Classes_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Tiger.ts?");

/***/ }),

/***/ "./Animals/Zebra.ts":
/*!**************************!*\
  !*** ./Animals/Zebra.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zebra: () => (/* binding */ Zebra)\n/* harmony export */ });\n/* harmony import */ var _Classes_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Animal */ \"./Classes/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Zebra = /** @class */ (function (_super) {\n    __extends(Zebra, _super);\n    function Zebra(name, age, maxSpeed, origin, loggerManager) {\n        var _this = _super.call(this, name, age) || this;\n        _this.maxSpeed = maxSpeed;\n        _this.origin = origin;\n        _this.loggerManager = loggerManager;\n        return _this;\n    }\n    Zebra.prototype.makeSound = function () {\n        this.loggerManager.log('Zebra makes sound');\n    };\n    Zebra.prototype.jump = function () {\n        this.loggerManager.log('Zebra jumps');\n    };\n    Zebra.prototype.run = function () {\n        this.loggerManager.log('Zebra runs');\n    };\n    Zebra.prototype.sleep = function () {\n        this.loggerManager.log('Zebra is sleeping');\n    };\n    Zebra.prototype.walk = function () {\n        this.loggerManager.log('Zebra is walking');\n    };\n    return Zebra;\n}(_Classes_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Zebra.ts?");

/***/ }),

/***/ "./Classes/Animal.ts":
/*!***************************!*\
  !*** ./Classes/Animal.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nvar Animal = /** @class */ (function () {\n    function Animal(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    return Animal;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Classes/Animal.ts?");

/***/ }),

/***/ "./Classes/ConsoleLogger.ts":
/*!**********************************!*\
  !*** ./Classes/ConsoleLogger.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConsoleLogger: () => (/* binding */ ConsoleLogger)\n/* harmony export */ });\nvar ConsoleLogger = /** @class */ (function () {\n    function ConsoleLogger() {\n    }\n    ConsoleLogger.prototype.log = function (message) {\n        console.log(message);\n    };\n    return ConsoleLogger;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Classes/ConsoleLogger.ts?");

/***/ }),

/***/ "./Classes/SingletonLoggerManager.ts":
/*!*******************************************!*\
  !*** ./Classes/SingletonLoggerManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingletonLoggerManager: () => (/* binding */ SingletonLoggerManager)\n/* harmony export */ });\nvar SingletonLoggerManager = /** @class */ (function () {\n    function SingletonLoggerManager(logger) {\n        this.logs = [];\n        this.logger = logger;\n    }\n    SingletonLoggerManager.getInstance = function (logger) {\n        if (!this.instance) {\n            this.instance = new SingletonLoggerManager(logger);\n        }\n        return this.instance;\n    };\n    SingletonLoggerManager.prototype.log = function (message) {\n        this.logs.push(message);\n        this.logger.log(message);\n    };\n    SingletonLoggerManager.prototype.getLogs = function () {\n        return this.logs;\n    };\n    return SingletonLoggerManager;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Classes/SingletonLoggerManager.ts?");

/***/ }),

/***/ "./Classes/Zookeeper.ts":
/*!******************************!*\
  !*** ./Classes/Zookeeper.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zookeeper: () => (/* binding */ Zookeeper)\n/* harmony export */ });\nvar Zookeeper = /** @class */ (function () {\n    function Zookeeper(loggerManager) {\n        this.loggerManager = loggerManager;\n    }\n    Zookeeper.prototype.feedAnimal = function (animal) {\n        var feedingDateAndTime = new Date();\n        var message = \"\".concat(animal.constructor.name, \" was fed at \").concat(feedingDateAndTime);\n        this.loggerManager.log(message);\n    };\n    return Zookeeper;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Classes/Zookeeper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animals_Elephant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animals/Elephant */ \"./Animals/Elephant.ts\");\n/* harmony import */ var _Animals_Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Animals/Tiger */ \"./Animals/Tiger.ts\");\n/* harmony import */ var _Animals_Zebra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Animals/Zebra */ \"./Animals/Zebra.ts\");\n/* harmony import */ var _Classes_Zookeeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Classes/Zookeeper */ \"./Classes/Zookeeper.ts\");\n/* harmony import */ var _Classes_ConsoleLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Classes/ConsoleLogger */ \"./Classes/ConsoleLogger.ts\");\n/* harmony import */ var _Classes_SingletonLoggerManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Classes/SingletonLoggerManager */ \"./Classes/SingletonLoggerManager.ts\");\n\n\n\n\n\n\nvar consoleLogger = new _Classes_ConsoleLogger__WEBPACK_IMPORTED_MODULE_4__.ConsoleLogger();\nvar loggerManager = _Classes_SingletonLoggerManager__WEBPACK_IMPORTED_MODULE_5__.SingletonLoggerManager.getInstance(consoleLogger);\nvar zebra = new _Animals_Zebra__WEBPACK_IMPORTED_MODULE_2__.Zebra('Marty', 10, 65, 'Africa', loggerManager);\nzebra.makeSound();\nzebra.run();\nvar elephant = new _Animals_Elephant__WEBPACK_IMPORTED_MODULE_0__.Elephant('Burt', 40, 3000, loggerManager);\nelephant.makeSound();\nelephant.sleep();\nvar tiger = new _Animals_Tiger__WEBPACK_IMPORTED_MODULE_1__.Tiger('Vitaly', 15, false, loggerManager);\ntiger.makeSound();\n//Simulate tiger release outside the cage here:\n// tiger.hunt();\n// tiger.swim()\ntiger.checkIfwasOutsideInLast8HoursAndSet();\nvar zookeeper = new _Classes_Zookeeper__WEBPACK_IMPORTED_MODULE_3__.Zookeeper(loggerManager);\nzookeeper.feedAnimal(elephant);\nconsole.log(\"Logged Messages:\", loggerManager.getLogs());\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;