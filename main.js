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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n\nconst ButtonBurger = document.querySelector('.button-burger');\n\nfunction openBurger() {\n  const burger = document.querySelector('.assortement__grid_burger');\n  burger.classList.toggle('burger');\n}\n\nButtonBurger.addEventListener('click', () => {\n  openBurger();\n});\nButtonBurger.addEventListener('click', function () {\n  ButtonBurger.innerHTML = ButtonBurger.innerHTML === 'Еще вкусы' ? ButtonBurger.innerHTML = 'Свернуть' : ButtonBurger.innerHTML = 'Еще вкусы';\n});\nconst buttonShow = document.querySelectorAll('.button-show');\nconst buttonHide = document.querySelectorAll('.button-hide');\nconst popup = document.querySelectorAll('.card');\n\nfunction closePopup() {\n  const openedPopup = document.querySelector('.card--open');\n  openedPopup.classList.remove('card--open');\n}\n\nbuttonShow.forEach((b, i) => b.addEventListener('click', () => {\n  popup[i].classList.add('card--open');\n}));\nbuttonHide.forEach(b => b.addEventListener('click', () => {\n  closePopup();\n}));\ndocument.addEventListener('keydown', function (evt) {\n  if (evt.keyCode == 27) {\n    closePopup();\n  }\n});\ndocument.addEventListener('click', function (evt) {\n  const isPopup = evt.target.classList.contains('card');\n\n  if (isPopup) {\n    closePopup();\n  }\n});\nconst chat_id = '628414722',\n      botID = 'bot5444187892:AAGOABdbwBV7MRjK3wbBG0ekc3QAZBgHrw4';\nconst telegramURL = `https://api.telegram.org/${botID}/sendMessage`;\ndocument.querySelector('#messageForm').addEventListener(\"submit\", async e => {\n  // When the user submits the form\n  e.preventDefault(); // Don't submit\n\n  let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message\n  Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.\n  null, 4); // Prettify the JSON so we can read the data easily\n\n  const sendMessage = await fetch(telegramURL, {\n    // Send the request to the telegram API\n    method: 'POST',\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    // This is required when sending a JSON body.\n    body: JSON.stringify({\n      chat_id,\n      text\n    }) // The body must be a string, not an object\n\n  });\n  const messageStatus = document.querySelector('#status');\n  if (sendMessage.ok) // Update the user on if the message went through\n    messageStatus.textContent = \"Заявка отправлена\";else messageStatus.textContent = \"Message Failed to send :( \" + (await sendMessage.text());\n  e.target.reset(); // Clear the form fields.\n}); // const burger = document.querySelector('.burger')\n\n//# sourceURL=webpack://heat-tobacco/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://heat-tobacco/./src/pages/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;