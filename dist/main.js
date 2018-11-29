/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(htmlElements) {\n    this.els = htmlElements;\n  }\n\n  html (string) {\n    if (string) {\n      for (var i = 0; i < this.els.length; i++) {\n        this.els[i].innerHTML = string;\n      }\n    } else {\n      return this.els[0].innerHTML;\n    }\n  }\n\n\n  empty () {\n    for (var i = 0; i < this.els.length; i++) {\n      this.els[i].innerHTML = \"\";\n    }\n  }\n\n  append (...elements) {\n    // console.log(\"WE are in append!\");\n    console.dir(this.els);\n    for (var i = 0; i < elements.length; i++) {\n      this.els.push(elements[i]);\n    }\n    console.dir(this.els);\n  }\n\n  attr (name, value) {\n    // let attr = Array.from(this.attributes);\n    this.els.forEach( (el) => {\n      el.setAttribute(name, value);\n    });\n    // console.log(attr);\n  }\n\n  addClass (name, value) {\n    this.els.forEach( (el) => {\n      el.attr(name, value);\n    });\n  }\n\n  removeClass (name, value = \"\") {\n    this.els.forEach( (el) => {\n      el.attr(name, value);\n    });\n  }\n\n  children () {\n    let childNodes = [];\n    for (var i = 0; i < this.els.length; i++) {\n      if (this.els[i].children === null) {\n        continue;\n      } else {\n        childNodes.push(this.els[i].children);\n      }\n    }\n\n    return new DomNodeCollection(childNodes);\n  }\n\n  parent () {\n    let parentNodes = [];\n    for (var i = 0; i < this.els.length; i++) {\n      if (this.els[i].parentNode === null) {\n        continue;\n      } else {\n        parentNodes.push(this.els[i].parentNode);\n      }\n    }\n\n    return new DomNodeCollection(parentNodes);\n  }\n\n  find (selector) {\n    let select = document.querySelectorAll(selector);\n    let selectedArray = Array.from(select);\n    return new DomNodeCollection(selectedArray);\n  }\n\n  remove () {\n    this.empty();\n    for (var i = 0; i < this.els.length; i++) {\n      this.els = [];\n    }\n  }\n}\n\nmodule.exports = DomNodeCollection;\n\n// let body = $l(\"body\");\n// body.append(\"<h1> Hello </h1>\");\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l (selector, ...otherArgs) {\n  let htmlElements = [];\n\n  if (typeof selector === \"string\") {\n    const nodes = document.querySelectorAll(selector);\n    console.dir(nodes);\n    const nodesList = Array.from(nodes);\n    console.dir(nodesList);\n    return new DomNodeCollection(nodesList);\n  } else if (selector instanceof HTMLElement) {\n    htmlElements.push(selector);\n    return new DomNodeCollection(htmlElements);\n  }\n}\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });