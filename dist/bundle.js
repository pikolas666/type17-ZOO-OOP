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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Elephant: () => (/* binding */ Elephant)\n/* harmony export */ });\n/* harmony import */ var _src_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Elephant = /** @class */ (function (_super) {\n    __extends(Elephant, _super);\n    function Elephant(name, age, weight) {\n        var _this = _super.call(this, name, age) || this;\n        _this.weight = weight;\n        return _this;\n    }\n    Elephant.prototype.makeSound = function () {\n        console.log('Elephant makes sound');\n    };\n    Elephant.prototype.sleep = function () {\n        console.log('Elephant sleeps');\n    };\n    Elephant.prototype.walk = function () {\n        console.log('Elephant walks');\n    };\n    return Elephant;\n}(_src_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Elephant.ts?");

/***/ }),

/***/ "./Animals/Tiger.ts":
/*!**************************!*\
  !*** ./Animals/Tiger.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tiger: () => (/* binding */ Tiger)\n/* harmony export */ });\n/* harmony import */ var _src_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Tiger = /** @class */ (function (_super) {\n    __extends(Tiger, _super);\n    function Tiger(name, age, wasOutsideInLast8Hours, outOfTheCageTimeStamp) {\n        if (outOfTheCageTimeStamp === void 0) { outOfTheCageTimeStamp = null; }\n        var _this = _super.call(this, name, age) || this;\n        _this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;\n        _this.outOfTheCageTimeStamp = outOfTheCageTimeStamp;\n        return _this;\n    }\n    Tiger.prototype.makeSound = function () {\n        console.log('Tiger makes sound');\n    };\n    Tiger.prototype.swim = function () {\n        this.outOfTheCageTimeStamp = new Date();\n        console.log('Tiger swims');\n        return this.wasOutsideInLast8Hours = true;\n    };\n    Tiger.prototype.hunt = function () {\n        this.outOfTheCageTimeStamp = new Date();\n        console.log('Tiger hunts');\n        return this.wasOutsideInLast8Hours = true;\n    };\n    //additional method:\n    Tiger.prototype.checkIfwasOutsideInLast8HoursAndSet = function () {\n        if (this.outOfTheCageTimeStamp === null) {\n            this.wasOutsideInLast8Hours = false;\n        }\n        else {\n            var newTimeAndDateStamp = new Date();\n            var timeDifference = newTimeAndDateStamp.getTime() - this.outOfTheCageTimeStamp.getTime();\n            var eightHoursInMillis = 8 * 60 * 60 * 1000;\n            this.wasOutsideInLast8Hours = timeDifference < eightHoursInMillis;\n        }\n        console.log(this.wasOutsideInLast8Hours ? 'Tiger was outside the cage in the past 8h' : 'Tiger was inside the cage in the past 8h');\n        return this.wasOutsideInLast8Hours;\n    };\n    return Tiger;\n}(_src_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Tiger.ts?");

/***/ }),

/***/ "./Animals/Zebra.ts":
/*!**************************!*\
  !*** ./Animals/Zebra.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zebra: () => (/* binding */ Zebra)\n/* harmony export */ });\n/* harmony import */ var _src_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Zebra = /** @class */ (function (_super) {\n    __extends(Zebra, _super);\n    function Zebra(name, age, maxSpeed, origin) {\n        var _this = _super.call(this, name, age) || this;\n        _this.maxSpeed = maxSpeed;\n        _this.origin = origin;\n        return _this;\n    }\n    Zebra.prototype.makeSound = function () {\n        console.log('Zebra makes sound');\n    };\n    Zebra.prototype.jump = function () {\n        console.log('Zebra jumps');\n    };\n    Zebra.prototype.run = function () {\n        console.log('Zebra runs');\n    };\n    return Zebra;\n}(_src_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./Animals/Zebra.ts?");

/***/ }),

/***/ "./src/Animal.ts":
/*!***********************!*\
  !*** ./src/Animal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nvar Animal = /** @class */ (function () {\n    function Animal(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    return Animal;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Animal.ts?");

/***/ }),

/***/ "./src/Zookeper.ts":
/*!*************************!*\
  !*** ./src/Zookeper.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zookeper: () => (/* binding */ Zookeper)\n/* harmony export */ });\nvar Zookeper = /** @class */ (function () {\n    function Zookeper() {\n    }\n    Zookeper.prototype.feedAnimal = function (animal) {\n        var feedingDateandTime = new Date();\n        console.log(\"\".concat(animal.constructor.name, \" was fed at \").concat(feedingDateandTime));\n    };\n    return Zookeper;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Zookeper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animals_Elephant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animals/Elephant */ \"./Animals/Elephant.ts\");\n/* harmony import */ var _Animals_Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Animals/Tiger */ \"./Animals/Tiger.ts\");\n/* harmony import */ var _Animals_Zebra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Animals/Zebra */ \"./Animals/Zebra.ts\");\n/* harmony import */ var _Zookeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Zookeper */ \"./src/Zookeper.ts\");\n\n\n\n\nvar zebra = new _Animals_Zebra__WEBPACK_IMPORTED_MODULE_2__.Zebra('Marty', 10, 65, 'Africa');\nzebra.makeSound();\nzebra.run();\nvar elephant = new _Animals_Elephant__WEBPACK_IMPORTED_MODULE_0__.Elephant('Burt', 40, 3000);\nelephant.makeSound();\nelephant.sleep();\nvar tiger = new _Animals_Tiger__WEBPACK_IMPORTED_MODULE_1__.Tiger('Vitaly', 15, false);\ntiger.makeSound();\n//Simulate tiger release outside the cage here:\n// tiger.hunt();\n// tiger.swim()\ntiger.checkIfwasOutsideInLast8HoursAndSet();\nvar zookeper = new _Zookeper__WEBPACK_IMPORTED_MODULE_3__.Zookeper();\nzookeper.feedAnimal(tiger);\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

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