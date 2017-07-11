/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(13);
var default_1 = __webpack_require__(5);
var development_1 = __webpack_require__(6);
var production_1 = __webpack_require__(7);
var test_1 = __webpack_require__(8);
function mergeConfig() {
    // Depending on the environment we will merge
    // the default assets and config to corresponding
    // environment files
    var environmentConfig =  true ? development_1.devEnv :
        process.env.NODE_ENV === 'test' ? test_1.testEnv : production_1.prodEnv;
    // Merge config files
    return _.merge(default_1.defaultConfig, environmentConfig);
}
;
var config = mergeConfig();
exports.default = config;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(16);
var express = __webpack_require__(0);
var fs = __webpack_require__(12);
var morgan = __webpack_require__(15);
var bodyParser = __webpack_require__(10);
var methodOverride = __webpack_require__(14);
var cookieParser = __webpack_require__(11);
// function to initialize the express app
function expressInit(app) {
    //aditional app Initializations
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    //initialize morgan express logger
    // NOTE: all node and custom module requests
    if (true) {
        app.use(morgan('dev', {
            skip: function (req, res) { return res.statusCode < 400; }
        }));
    }
    var dist = fs.existsSync('dist');
    //exposes the client and node_modules folders to the client for file serving when client queries "/"
    app.use('/node_modules', express.static('node_modules'));
    app.use(express.static("" + (dist ? 'dist/client' : 'client')));
    app.use('/public', express.static('public'));
    //exposes the client and node_modules folders to the client for file serving when client queries anything, * is a wildcard
    app.use('*', express.static('node_modules'));
    app.use('*', express.static("" + (dist ? 'dist/client' : 'client')));
    app.use('*', express.static('public'));
    // starts a get function when any directory is queried (* is a wildcard) by the client, 
    // sends back the index.html as a response. Angular then does the proper routing on client side
    if (false)
        app.get('*', function (req, res) {
            res.sendFile(path.join(process.cwd(), "/" + (dist ? 'dist/client' : 'client') + "/index.html"));
        });
    return app;
}
;
exports.default = expressInit;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
==============================================================================================
These configuration settings get called no matter what Node's process.env.NODE_ENV is set to.
==============================================================================================
*/

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = {
    port: __webpack_require__.i({"ENV":"development","NODE_ENV":"development"}).PORT || 5000,
    host: __webpack_require__.i({"ENV":"development","NODE_ENV":"development"}).HOST || '0.0.0.0'
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
===============================================
Used when process.env.NODE_ENV = 'development'
===============================================
//This file adds config settings and overwrites config settings in the ./default.ts file
//process.env.NODE_ENV is utilized in config/config.ts
*/

Object.defineProperty(exports, "__esModule", { value: true });
exports.devEnv = {};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
===============================================
Used when process.env.NODE_ENV = 'production'
===============================================
//This file adds config settings and overwrites config settings in the ./default.ts file
//process.env.NODE_ENV is utilized in config/config.ts
*/

Object.defineProperty(exports, "__esModule", { value: true });
exports.prodEnv = {
    port: __webpack_require__.i({"ENV":"development","NODE_ENV":"development"}).PORT || 8443,
    // Binding to 127.0.0.1 is safer in production.
    host: __webpack_require__.i({"ENV":"development","NODE_ENV":"development"}).HOST || '0.0.0.0'
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
======================================================================================
Used when process.env.NODE_ENV is equal to 'test'
======================================================================================
//This file adds config settings and overwrites config settings in the ./default.ts file
//process.env.NODE_ENV is utilized in config/config.ts
*/

Object.defineProperty(exports, "__esModule", { value: true });
exports.testEnv = {
    port: __webpack_require__.i({"ENV":"development","NODE_ENV":"development"}).PORT || 7001
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var chalk = __webpack_require__(3);
var http = __webpack_require__(4);
var config_1 = __webpack_require__(1);
var express_1 = __webpack_require__(2);
// Initialize express
var app = express();
function init() {
    // Initialize http server
    var server = http.createServer(app);
    express_1.default(app);
    server.listen(config_1.default.port, config_1.default.host, function () {
        var host = server.address().address;
        var port = server.address().port;
        if (true) {
            console.log(chalk.bold.cyan("\n\tEnvironment:\t\t\t " + ("development" || 'production')));
            if (false)
                console.log(chalk.bold.magenta("\tHTTP Server") +
                    chalk.bold.gray("\n\tServer Address:\t\t\t http://localhost:" + port + "\n"));
        }
    });
}
;
init();
// export express app for testing
exports.default = app;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("graceful-fs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);