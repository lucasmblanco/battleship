/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/eventsManagment.js":
/*!***************************************!*\
  !*** ./src/script/eventsManagment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignListener": () => (/* binding */ assignListener),
/* harmony export */   "assignListenerPerElement": () => (/* binding */ assignListenerPerElement)
/* harmony export */ });
var assignListener = function assignListener(container, functionality) {
  container.forEach(function (element) {
    element.addEventListener('click', functionality);
  });
};

var assignListenerPerElement = function assignListenerPerElement(container, functionality) {
  container.addEventListener('click', functionality);
};



/***/ }),

/***/ "./src/script/functionality.js":
/*!*************************************!*\
  !*** ./src/script/functionality.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignListenerToBoard": () => (/* binding */ assignListenerToBoard)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/script/interface.js");


var assignListenerToBoard = function assignListenerToBoard(event, board) {
  var boardElements = document.querySelectorAll('div.player');
  var numberID = Number(event.target.id);
  boardElements.forEach(function (element, index) {
    element.removeEventListener('click', element.fn);
    element.addEventListener('click', element.fn = function (e) {
      var status = assignPositionAndDeleteInteraction(e, board, numberID, boardElements);

      if (status === 'Assigned with success') {
        _interface__WEBPACK_IMPORTED_MODULE_0__.shipLocationOnBoard(index, event.target.dataset.length);
        _interface__WEBPACK_IMPORTED_MODULE_0__.deleteBoardInteraction();
      }
    });
  });
};

var assignPositionAndDeleteInteraction = function assignPositionAndDeleteInteraction(event, board, numberID) {
  var status = board.assignShipPosition(numberID, Number(event.target.dataset.x), Number(event.target.dataset.y));
  return status;
};



/***/ }),

/***/ "./src/script/gameboard.js":
/*!*********************************!*\
  !*** ./src/script/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/script/ship.js");


var gameboard = function gameboard() {
  var shipsOnBoard = [];
  var missedShots = [];

  var showSelectedShip = function showSelectedShip(index) {
    if (typeof index === 'number' && index < shipsOnBoard.length) return shipsOnBoard[index].showComposition();
    return;
  };

  var showBoard = function showBoard() {
    return shipsOnBoard.map(function (element) {
      return element.showComposition();
    });
  };

  var createShips = function createShips() {
    var newShip;

    for (var i = 5; i > 1; i--) {
      if (i === 3) {
        newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
        shipsOnBoard.push(newShip);
      }

      newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
      shipsOnBoard.push(newShip);
    }
  };

  var assignShipPosition = function assignShipPosition(index, x, y) {
    return shipsOnBoard[index].fillComposition(x, y);
  };

  var receiveAttack = function receiveAttack(x, y) {
    var newAttack = shipsOnBoard.some(function (element) {
      return element.hit(x, y);
    });

    if (!newAttack) {
      missedShots.push({
        'x': x,
        'y': y
      });
      return 'You miss the shot!';
    }

    return 'It was an impact!';
  };

  var showMissedShots = function showMissedShots() {
    return missedShots;
  };

  var checkShipStatus = function checkShipStatus() {
    var result = shipsOnBoard.every(function (ship) {
      return ship.isSunk() === true;
    });
    return result === true ? 'All ships are lost!' : null;
  };

  return {
    assignShipPosition: assignShipPosition,
    receiveAttack: receiveAttack,
    createShips: createShips,
    showSelectedShip: showSelectedShip,
    showMissedShots: showMissedShots,
    checkShipStatus: checkShipStatus,
    showBoard: showBoard
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);

/***/ }),

/***/ "./src/script/gameloop.js":
/*!********************************!*\
  !*** ./src/script/gameloop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preGame": () => (/* binding */ preGame),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/script/gameboard.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/script/interface.js");
/* harmony import */ var _eventsManagment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsManagment */ "./src/script/eventsManagment.js");
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality */ "./src/script/functionality.js");





var preGame = function preGame() {
  var playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerGameboard.createShips();
  computerBoard.createShips(); // interfaceManagment.showPlayerShips(playerGameboard); 
  //interfaceManagment.shipElementFunctionality(); 
  //   playerGameboard.assignShipPosition()

  /*
  const showPlayerShips = (container) => {
      const playerShipsBoard = playerGameboard.showBoard(); 
      playerShipsBoard.forEach((element, index) => {
          let shipFormation = interfaceManagment.shipElements(element.length, index);
          interfaceManagment.appendShip(container, shipFormation); 
      })
  }
  */

  return {
    playerGameboard: playerGameboard,
    computerBoard: computerBoard
  };
};

var startGame = function startGame(playerBoard, computerBoard) {
  console.log('hola');
};



/***/ }),

/***/ "./src/script/interface.js":
/*!*********************************!*\
  !*** ./src/script/interface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendShip": () => (/* binding */ appendShip),
/* harmony export */   "boardElementsFunctionality": () => (/* binding */ boardElementsFunctionality),
/* harmony export */   "deleteBoardInteraction": () => (/* binding */ deleteBoardInteraction),
/* harmony export */   "shipElementFunctionality": () => (/* binding */ shipElementFunctionality),
/* harmony export */   "shipElements": () => (/* binding */ shipElements),
/* harmony export */   "shipLocationOnBoard": () => (/* binding */ shipLocationOnBoard),
/* harmony export */   "showPlayerShips": () => (/* binding */ showPlayerShips)
/* harmony export */ });
/* harmony import */ var _eventsManagment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsManagment */ "./src/script/eventsManagment.js");
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionality */ "./src/script/functionality.js");

 // Crea el contenedor de los barcos y segun la composicion de cada uno crea divs dentro de este

var shipElements = function shipElements(shipComposition, index) {
  var shipContainer = document.createElement('div');
  shipContainer.classList.add('ship-cell');
  shipContainer.setAttribute('id', index);
  shipContainer.setAttribute('data-length', shipComposition); //  EventManagment.assignListenerPerElement(shipContainer, Functionality.playerShipFunctionality)

  createIndividualParts(shipContainer, shipComposition);
  return shipContainer;
}; // se encarga de crear la composicion segun la longitud y luego adherirla a un contenedor padre 


var createIndividualParts = function createIndividualParts(parentContainer, length) {
  for (var i = 0; i < length; i++) {
    var shipIndividual = document.createElement('div');
    shipIndividual.classList.add('ship');
    shipIndividual.classList.add(length);
    parentContainer.append(shipIndividual);
  }
}; //apende elementos a otro contenedor


var appendShip = function appendShip(container, element) {
  container.append(element);
}; // Añade functionalidad a los dos paneles


var boardElementsFunctionality = function boardElementsFunctionality() {
  var playerBoardElements = document.querySelectorAll('div.player');
  playerBoardListenerAndCoordenates(playerBoardElements);
}; // añade funcionalidad y coordenadas al panel del jugador 


var playerBoardListenerAndCoordenates = function playerBoardListenerAndCoordenates(container) {
  //EventManagment.assignListener(container, Functionality.coordenatesElection); 
  eachTen(container, assignXY);
}; // toma 10 elementos de un contendor y le aplica una funcion callback 


var eachTen = function eachTen(container, callback) {
  var elements = [];
  var y = 0;

  for (var i = 0; i < container.length; i++) {
    elements.push(container[i]);

    if (elements.length === 10) {
      y += 1;
      callback(elements, y);
      elements = [];
    }
  }
}; //asigna coordenadas a los contenedores


var assignXY = function assignXY(container, y) {
  for (var i = 0; i < container.length; i++) {
    container[i].setAttribute('data-x', i + 1);
    container[i].setAttribute('data-y', y);
  }
};

var shipElementFunctionality = function shipElementFunctionality(board) {
  var playerShips = document.querySelectorAll('div.ship-cell');
  playerShips.forEach(function (element) {
    element.addEventListener('click', function (e) {
      _functionality__WEBPACK_IMPORTED_MODULE_1__.assignListenerToBoard(e, board);
    }, {
      once: true
    });
  });
};

var showPlayerShips = function showPlayerShips(board) {
  var shipsContainer = document.querySelector('div.ships-container');
  var playerShipsBoard = board.showBoard();
  playerShipsBoard.forEach(function (element, index) {
    appendShip(shipsContainer, shipElements(element.length, index));
  });
};

var deleteBoardInteraction = function deleteBoardInteraction() {
  var boardElements = document.querySelectorAll('div.player');
  boardElements.forEach(function (element) {
    element.removeEventListener('click', element.fn);
  });
};

var shipLocationOnBoard = function shipLocationOnBoard(index, shipComposition) {
  var boardElements = document.querySelectorAll('div.player');
  var composition = shipComposition;

  for (var i = 0; i < composition; i++) {
    boardElements[index + i].classList.add('ship-on-water');
  }
};



/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/script/gameloop.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/script/interface.js");



var playButton = document.querySelector('button.play-button'); //const shipsContainer = document.querySelector('div.ships-container'); 

var startBattleship = function startBattleship() {
  var newGame = _gameloop__WEBPACK_IMPORTED_MODULE_1__.preGame(); // newGame.showPlayerShips(shipsContainer);
  //  InterfaceManagment.shipElementFunctionality(); 

  _interface__WEBPACK_IMPORTED_MODULE_2__.showPlayerShips(newGame.playerGameboard);
  _interface__WEBPACK_IMPORTED_MODULE_2__.shipElementFunctionality(newGame.playerGameboard);
};

playButton.addEventListener('click', startBattleship);
_interface__WEBPACK_IMPORTED_MODULE_2__.boardElementsFunctionality(); //boardElements.addEventListener('click', selectPosititon)

/***/ }),

/***/ "./src/script/ship.js":
/*!****************************!*\
  !*** ./src/script/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ship = function ship(length) {
  var shipComposition = [];
  createComposition(length);

  function createComposition(length) {
    for (var i = 0; i < length; i++) {
      shipComposition.push({
        'x': '',
        'y': ''
      });
    }
  }

  var showComposition = function showComposition() {
    return shipComposition;
  };

  var fillComposition = function fillComposition(x, y) {
    if (x + shipComposition.length > 11) return 'Not assigned';

    for (var i = 0; i < shipComposition.length; i++) {
      shipComposition[i].x = x + i;
      shipComposition[i].y = y;
    }

    return 'Assigned with success';
  };
  /*
  const buildShipComposition = (x, y) => {
      for(let i = 0; i < length; i++) {
          shipComposition.push({
              coordinates: {x: x, y: y + i},
              status: 'active'
          })
      }
  }
  */


  var sayLength = function sayLength() {
    return shipComposition.length;
  };

  var hit = function hit(x, y) {
    var indexOfDamagePostion = shipComposition.findIndex(function (element) {
      return JSON.stringify(element) === JSON.stringify({
        'x': x,
        'y': y
      });
    });
    if (indexOfDamagePostion < 0) return false;
    shipComposition.splice(indexOfDamagePostion, 1);
    return true;
  };

  var isSunk = function isSunk() {
    return shipComposition.length < 1;
  };

  return {
    createComposition: createComposition,
    showComposition: showComposition,
    sayLength: sayLength,
    fillComposition: fillComposition,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ndiv.interaction-zone {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(252, 239, 220);\n}\n\ndiv.battleship-board {\n  display: grid;\n  grid-template-columns: 0.1fr 1.9fr 1fr;\n  grid-template-rows: 0.1fr 1.9fr 1fr;\n  gap: 0px 0px;\n  grid-template-areas: \". X-AXIS X-AXIS\" \"Y-AXIS BOARD BOARD\" \"Y-AXIS BOARD BOARD\";\n  width: 650px;\n  height: 650px;\n  padding: 2px;\n  background-color: rgb(93, 236, 170);\n}\ndiv.battleship-board .x-axis {\n  display: flex;\n  grid-area: X-AXIS;\n  background-color: yellowgreen;\n}\ndiv.battleship-board .x-axis .x-axis-element {\n  margin: 0 1px;\n  width: 60.83px;\n  height: 100%;\n  background-color: aqua;\n  text-align: center;\n}\ndiv.battleship-board .y-axis {\n  display: flex;\n  flex-direction: column;\n  grid-area: Y-AXIS;\n  background-color: yellowgreen;\n}\ndiv.battleship-board .y-axis .y-axis-element {\n  margin: 1px 0;\n  width: 100%;\n  height: 60.83px;\n  background-color: aqua;\n  text-align: center;\n  line-height: 60.83px;\n}\ndiv.battleship-board .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-area: BOARD;\n  gap: 2px;\n  background-color: black;\n  padding: 1px;\n}\ndiv.battleship-board .board .board-element {\n  background-color: red;\n}\ndiv.battleship-board .board .ship-on-water {\n  background-color: orange;\n}\n\nh1.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 6vh;\n  text-align: center;\n}\n\ndiv.buttons-container {\n  display: flex;\n  width: 100vw;\n  height: 4vh;\n  justify-content: center;\n  align-items: center;\n}\n\nmain.main-body {\n  display: flex;\n  width: 100vw;\n  height: 90vh;\n}\n\ndiv.container-game-actions {\n  display: flex;\n  flex-flow: row wrap;\n  padding: 2px;\n  width: 700px;\n  height: 150px;\n}\n\n.ships-container {\n  background-color: red;\n}\n\n.ship-cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2px;\n  width: 100%;\n  height: 26px;\n  background-color: blueviolet;\n}\n.ship-cell:hover {\n  background-color: black;\n}\n.ship-cell:focus-within {\n  background-color: pink;\n}\n\n.ship {\n  margin: 1px;\n  width: 22px;\n  height: 22px;\n  background-color: darkgreen;\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/styles/style.scss","webpack://./src/styles/_utilities.scss","webpack://./src/styles/_config.scss","webpack://./src/styles/_battleship-board.scss"],"names":[],"mappings":"AAAA;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACAD;;ADEA,gDAAA;AACA;;EAEC,cAAA;ACCD;;ADCA;EACC,cAAA;ACED;;ADAA;EACC,gBAAA;ACGD;;ADDA;EACC,YAAA;ACID;;ADFA;;EAEC,WAAA;EACA,aAAA;ACKD;;ADHA;EACC,yBAAA;EACA,iBAAA;ACMD;;AClDA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCCTY;AF8DhB;;AG5DA;EACI,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,YAAA;EACA,gFACE;EAGF,YAAA;EACA,aAAA;EACA,YAAA;EACA,mCDbW;AFyEf;AG1DI;EACI,aAAA;EACA,iBAAA;EACA,6BAAA;AH4DR;AG1DQ;EACI,aAAA;EACA,cAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;AH4DZ;AGxDI;EACI,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,6BAAA;AH0DR;AGxDQ;EACI,aAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;AH0DZ;AGtDI;EACI,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,gBAAA;EACA,QAAA;EACA,uBAAA;EACA,YAAA;AHwDR;AGtDQ;EACI,qBAAA;AHwDZ;AGrDQ;EACI,wBAAA;AHuDZ;;AA9GA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AAiHJ;;AA9GA;EACI,aAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAiHJ;;AA9GA;EACI,aAAA;EACA,YAAA;EACA,YAAA;AAiHJ;;AA9GA;EACI,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;AAiHJ;;AA5GA;EACI,qBAAA;AA+GJ;;AA5GA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;AA+GJ;AA7GI;EACI,uBAAA;AA+GR;AA5GI;EACI,sBAAA;AA8GR;;AA1GA;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,2BAAA;EACA,oBAAA;AA6GJ","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","@use 'reset'; \r\n@use 'config';\r\n@use 'utilities';\r\n@use 'battleship-board'; \r\n\r\nh1.title {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 6vh;\r\n    text-align: center;\r\n}\r\n\r\ndiv.buttons-container{\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 4vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nmain.main-body {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 90vh;\r\n}\r\n\r\ndiv.container-game-actions{\r\n    display: flex;\r\n    flex-flow: row wrap; \r\n    padding: 2px;\r\n    width: 700px;\r\n    height: 150px;\r\n\r\n    \r\n}\r\n\r\n.ships-container{\r\n    background-color: red;\r\n}\r\n\r\n.ship-cell{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 2px;\r\n    width: 100%;\r\n    height: 26px;\r\n    background-color: blueviolet; \r\n\r\n    &:hover{\r\n        background-color: black;\r\n    }\r\n\r\n    &:focus-within{\r\n        background-color: pink\r\n    }\r\n}\r\n\r\n.ship{\r\n    margin: 1px;\r\n    width: 22px;\r\n    height: 22px;\r\n    background-color:darkgreen; \r\n    pointer-events: none;\r\n    \r\n}\r\n\r\n","@use 'config';\r\n\r\ndiv.interaction-zone {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: config.$primary-color;\r\n}","$primary-color: rgb(252, 239, 220); \r\n$accent-color: rgb(93, 236, 170);","@use 'config'; \r\n\r\ndiv.battleship-board{\r\n    display: grid;\r\n    grid-template-columns: 0.1fr 1.9fr 1fr; \r\n    grid-template-rows: 0.1fr 1.9fr 1fr; \r\n    gap: 0px 0px; \r\n    grid-template-areas: \r\n      \". X-AXIS X-AXIS\"\r\n      \"Y-AXIS BOARD BOARD\"\r\n      \"Y-AXIS BOARD BOARD\"; \r\n    width: 650px;\r\n    height: 650px;\r\n    padding: 2px;\r\n    background-color: config.$accent-color;\r\n\r\n    .x-axis{\r\n        display: flex;\r\n        grid-area: X-AXIS;\r\n        background-color: yellowgreen;\r\n\r\n        .x-axis-element{\r\n            margin: 0 1px;\r\n            width: 60.83px;\r\n            height: 100%;\r\n            background-color: aqua;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    .y-axis{\r\n        display: flex;\r\n        flex-direction: column;\r\n        grid-area: Y-AXIS;\r\n        background-color: yellowgreen;\r\n\r\n        .y-axis-element{\r\n            margin: 1px 0;\r\n            width: 100%;\r\n            height: 60.83px;\r\n            background-color: aqua;\r\n            text-align: center;\r\n            line-height: 60.83px;\r\n        }\r\n    }\r\n\r\n    .board{\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 1fr);\r\n        grid-template-rows: repeat(10, 1fr);\r\n        grid-area: BOARD;\r\n        gap: 2px;\r\n        background-color: black;\r\n        padding: 1px;\r\n\r\n        .board-element{\r\n            background-color: red;\r\n        }\r\n\r\n        .ship-on-water{\r\n            background-color: orange;\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/script/main.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/ship.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=page5fcddb8339253c583da1.js.map