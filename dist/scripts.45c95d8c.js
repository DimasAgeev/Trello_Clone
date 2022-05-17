// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/scripts/clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTime = getTime;

function getTime() {
  setInterval(function () {
    // Seconds
    var seconds = new Date().getSeconds();
    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds; // Minutes

    var minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes; // Hours

    var hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
  }, 1000);
}
},{}],"../src/scripts/modalWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleaningInput = cleaningInput;
exports.createModalWindow = createModalWindow;
exports.createModalWindowEdit = createModalWindowEdit;
exports.createModalWindowLimitation = createModalWindowLimitation;
exports.createModalWindowWarning = createModalWindowWarning;
exports.deleteModalWindow = deleteModalWindow;
exports.deleteModalWindowEdit = deleteModalWindowEdit;
exports.deleteModalWindowLimitation = deleteModalWindowLimitation;
exports.deleteModalWindowWarning = deleteModalWindowWarning;

function createModalWindow() {
  var p = document.querySelector(".popup");
  var c = document.querySelector(".popup__content");
  c.classList.add("open");
  p.classList.add("open");
}

function deleteModalWindow() {
  var p = document.querySelector(".popup");
  var c = document.querySelector(".popup__content");
  c.classList.remove("open");
  p.classList.remove("open");
}

function createModalWindowEdit() {
  var p = document.querySelector(".edit");
  var c = document.querySelector(".edit__content");
  c.classList.add("open");
  p.classList.add("open");
}

function deleteModalWindowEdit() {
  var p = document.querySelector(".edit");
  var c = document.querySelector(".edit__content");
  c.classList.remove("open");
  p.classList.remove("open");
}

function createModalWindowWarning() {
  var p = document.querySelector(".delete__all");
  var c = document.querySelector(".delete__content");
  c.classList.add("open");
  p.classList.add("open");
}

function deleteModalWindowWarning() {
  var p = document.querySelector(".delete__all");
  var c = document.querySelector(".delete__content");
  c.classList.remove("open");
  p.classList.remove("open");
}

function deleteModalWindowLimitation() {
  var p = document.querySelector(".limitation");
  var c = document.querySelector(".limitation__content");
  c.classList.remove("open");
  p.classList.remove("open");
}

function createModalWindowLimitation() {
  var p = document.querySelector(".limitation");
  var c = document.querySelector(".limitation__content");
  c.classList.add("open");
  p.classList.add("open");
}

function cleaningInput() {
  var it = document.getElementById("input__title");
  it.value = "";
  var id = document.getElementById("input__description");
  id.value = "";
}
},{}],"../src/scripts/getDataFromLocalStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateFromLocal = getDateFromLocal;
exports.getDescriptionFromLocal = getDescriptionFromLocal;
exports.getLocalCardArray = getLocalCardArray;
exports.getTitleFromLocal = getTitleFromLocal;
exports.getUserFromLocal = getUserFromLocal;
exports.pushDescriptionFromLocalToModalEdit = pushDescriptionFromLocalToModalEdit;
exports.pushTitleFromLocalToModalEdit = pushTitleFromLocalToModalEdit;

//Получение данных из Локал
///GetDateFromLocalStorage//////////////////////////////////
function getDateFromLocal(el, card) {
  var p = card.querySelector(".todo__time");
  var cardDate = el.date;
  p.innerText = cardDate;
} ///GetTitleFromLocalStorage/////////////////////////////////


function getTitleFromLocal(el, card) {
  var p = card.querySelector(".todo__title-text");
  var cardTitle = el.title;
  p.innerText = cardTitle;
} //GetDescriptionFromLocalStorage////////////////////////////


function getDescriptionFromLocal(el, card) {
  var p = card.querySelector(".todo__description-text");
  var cardDescription = el.description;
  p.innerText = cardDescription;
} //GetUserFromLocalStorage////////////////////////////


function getUserFromLocal(el, card) {
  var p = card.querySelector(".todo__user");
  var cardUser = el.user;
  p.innerText = cardUser;
} //GetFromLocalCardArray////////////////////////////


function getLocalCardArray(cardArray) {
  cardArray = JSON.parse(localStorage.getItem("cardArray"));
  return cardArray;
} ///PushTitleFromLocalStorageToModalEdit ///////////////////////


function pushTitleFromLocalToModalEdit(el) {
  var p = document.querySelector(".editInput__title");
  var cardTitle = el.title;
  p.value = cardTitle;
} ///PushDescriptionFromLocalStorageToModalDescription //////////


function pushDescriptionFromLocalToModalEdit(el) {
  var p = document.querySelector(".editInput__description");
  var cardTitle = el.description;
  p.value = cardTitle;
} //GetNumberTodo///////////////////////////////////////////////


var numberTodo = document.querySelector(".todo__number");

function getNumberTodoCard() {
  var numberTodoCard = 0;
  cardArray.forEach(function (el) {
    if (el.status == "neutral") {
      ++numberTodoCard;
    }

    numberTodo.innerText = numberTodoCard;
  });
}
},{}],"../src/scripts/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _getDataFromLocalStorage = require("./getDataFromLocalStorage.js");

var _createElements = require("./createElements.js");

function render(array) {
  _createElements.todoContent.innerHTML = "";
  _createElements.progressContent.innerHTML = "";
  _createElements.doneContent.innerHTML = "";

  if (array.status != "deleted") {
    array.forEach(function (el) {
      if (el.status == "neutral") {
        (0, _createElements.createCard)();
        var currentCard = _createElements.todoContent.lastChild;
        (0, _getDataFromLocalStorage.getDateFromLocal)(el, currentCard);
        (0, _getDataFromLocalStorage.getTitleFromLocal)(el, currentCard);
        (0, _getDataFromLocalStorage.getDescriptionFromLocal)(el, currentCard);
        (0, _getDataFromLocalStorage.getUserFromLocal)(el, currentCard);
        (0, _createElements.dataIdToCard)(el, currentCard);
      }

      if (el.status == "inprogress") {
        (0, _createElements.createCardInProgress)();
        var currentProgressCard = _createElements.progressContent.lastChild;
        (0, _getDataFromLocalStorage.getTitleFromLocal)(el, currentProgressCard);
        (0, _getDataFromLocalStorage.getDateFromLocal)(el, currentProgressCard);
        (0, _getDataFromLocalStorage.getDescriptionFromLocal)(el, currentProgressCard);
        (0, _getDataFromLocalStorage.getUserFromLocal)(el, currentProgressCard);
        (0, _createElements.dataIdToCard)(el, currentProgressCard);
      }

      if (el.status == "done") {
        (0, _createElements.createCardInDone)();
        var currentDoneCard = _createElements.doneContent.lastChild;
        (0, _getDataFromLocalStorage.getTitleFromLocal)(el, currentDoneCard);
        (0, _getDataFromLocalStorage.getDateFromLocal)(el, currentDoneCard);
        (0, _getDataFromLocalStorage.getDescriptionFromLocal)(el, currentDoneCard);
        (0, _getDataFromLocalStorage.getUserFromLocal)(el, currentDoneCard);
        (0, _createElements.dataIdToCard)(el, currentDoneCard);
      }

      (0, _createElements.todoNumberCard)();
      (0, _createElements.progressNumberCard)();
      (0, _createElements.doneNumberCard)();
    });
  }

  (0, _createElements.rove)();
}
},{"./getDataFromLocalStorage.js":"../src/scripts/getDataFromLocalStorage.js","./createElements.js":"../src/scripts/createElements.js"}],"../src/scripts/createElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardArray = void 0;
exports.changeCardInLocal = changeCardInLocal;
exports.createButton = createButton;
exports.createCard = createCard;
exports.createCardInDone = createCardInDone;
exports.createCardInLocal = createCardInLocal;
exports.createCardInProgress = createCardInProgress;
exports.createElement = createElement;
exports.createInput = createInput;
exports.createObject = createObject;
exports.dataIdToCard = dataIdToCard;
exports.doneContent = void 0;
exports.doneNumberCard = doneNumberCard;
exports.getContentFromDescription = getContentFromDescription;
exports.getContentFromEditDescription = getContentFromEditDescription;
exports.getContentFromEditTitle = getContentFromEditTitle;
exports.getContentFromTitle = getContentFromTitle;
exports.getDate = getDate;
exports.getUniqueId = getUniqueId;
exports.getUserFromUserSelect = getUserFromUserSelect;
exports.progressContent = void 0;
exports.progressNumberCard = progressNumberCard;
exports.rove = rove;
exports.saveCardArray = saveCardArray;
exports.todoContent = void 0;
exports.todoNumberCard = todoNumberCard;

var _getDataFromLocalStorage = require("./getDataFromLocalStorage.js");

var _render = require("./render.js");

//
function createElement(tag, className, text) {
  var el = document.createElement(tag);
  className ? el.classList.add(className) : null;
  text ? el.innerText = text : null;
  return el;
}

function createInput(className, type, placeholdertext) {
  var el = document.createElement("input");
  className ? el.classList.add(className) : null;
  el.setAttribute("type", type);
  el.setAttribute("placeholder", placeholdertext);
  return el;
}

function createButton(className, type, text) {
  var el = document.createElement("button");
  className ? el.classList.add(className) : null;
  el.setAttribute("type", type);
  text ? el.innerText = text : null;
  return el;
} //Прорисовка карточки в todo столбце


var todoContent = document.querySelector(".todo__column");
exports.todoContent = todoContent;

function createCard() {
  var todo__card = createElement("div", "todo__card");
  todoContent.append(todo__card);
  var editBtn = createButton("editBtn", "button", "EDIT");
  todo__card.append(editBtn);
  var deleteBtn = createButton("deleteBtn", "button", "DELETE");
  todo__card.append(deleteBtn);
  var todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  var todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  var todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  var todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  var pushBtn = createButton("pushBtn", "button", ">");
  todoDescription.append(pushBtn);
  var todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  var todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  var todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
} //Прорисовка карточки в столбце inprogress


var progressContent = document.querySelector(".progress__column");
exports.progressContent = progressContent;

function createCardInProgress() {
  var todo__card = createElement("div", "todo__card");
  progressContent.append(todo__card);
  var editBtn = createButton("backBtn", "button", "BACK");
  todo__card.append(editBtn);
  var deleteBtn = createButton("completeBtn", "button", "COMPLETE");
  todo__card.append(deleteBtn);
  var todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  var todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  var todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  var todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  var todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  var todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  var todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
} //Прорисовка карточки в столбце done


var doneContent = document.querySelector(".done__column");
exports.doneContent = doneContent;

function createCardInDone() {
  var todo__card = createElement("div", "todo__card");
  doneContent.append(todo__card);
  var deleteBtn = createButton("deleteDoneBtn", "button", "DELETE");
  todo__card.append(deleteBtn);
  var todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  var todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  var todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  var todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  var todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  var todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  var todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
} // Созадине объекта карточки


function createObject(id, title, description, user, date) {
  var cardObj = {
    id: id,
    title: title,
    description: description,
    date: date,
    user: user,
    status: "neutral"
  };
  return cardObj;
} //GetDate///////////////////////////////////////////////////


function getDate() {
  var date = new Date();
  return "".concat(date.getDate(), ".").concat(date.getMonth() + 1, ".").concat(date.getFullYear(), "\n ").concat(date.getHours(), ":").concat(date.getMinutes());
} //GetContentFromInputTitle//////////////////////////////////////////////////////////////////////////


var inputTitle = document.querySelector(".input__title");

function getContentFromTitle() {
  if (inputTitle.value !== "") {
    var content = inputTitle.value;
    return content;
  }
} //GetContentFromInputDescription////////////////////////////


var InputDescription = document.querySelector(".input__description");

function getContentFromDescription() {
  if (InputDescription.value !== "") {
    var content = InputDescription.value;
    return content;
  }
} //GetUserFromUserSelect////////////////////////////


var userSelect = document.querySelector("#select");

function getUserFromUserSelect() {
  if (userSelect.value !== "") {
    var content = userSelect.value;
    return content;
  }
} //GetUniqueIdFromLocalStorage//////////////////////////////////////////////////////////////


function getUniqueId() {
  var uniqueId = Number(localStorage.getItem("UniqueId"));
  return uniqueId ? uniqueId : 0;
} //Созддание пустого массива//////////////////////////////


var cardArray = []; //SaveToLocalStorageCardArray///////////////////////////////

exports.cardArray = cardArray;

function saveCardArray(cardArray) {
  var cardArrayPush = JSON.stringify(cardArray);
  localStorage.setItem("cardArray", cardArrayPush);
} //ObjectFillingAndPushToArray//////////////////////////////////////////////////////////////////////////


function createCardInLocal() {
  var id = getUniqueId() + 1;
  var title = getContentFromTitle();
  var description = getContentFromDescription();
  var user = getUserFromUserSelect();
  var date = getDate();
  var object = createObject(id, title, description, user, date);
  cardArray.push(object);
  saveCardArray(cardArray);
  localStorage.setItem("UniqueId", id);
} ///AppropriationData-idToCard////////////////////////////


function dataIdToCard(el, card) {
  var id = el.id;
  card.setAttribute("data-id", id);
} //GetContentFromEditInputTitle//////////////////////////////////////////////////////////////////////////


var inputEditTitle = document.querySelector(".editInput__title");

function getContentFromEditTitle() {
  if (inputEditTitle.value !== "") {
    var content = inputEditTitle.value;
    return content;
  }
} //GetContentFromEditInputDescription///////////////////////////


var InputEditDescription = document.querySelector(".editInput__description");

function getContentFromEditDescription() {
  if (InputEditDescription.value !== "") {
    var content = InputEditDescription.value;
    return content;
  }
} //ChangeObjectFillingAndPushToArray//////////////////////////////////////////////////////////////////////////


function changeCardInLocal(idCard) {
  console.log("привет");
  var title = getContentFromEditTitle();
  var description = getContentFromEditDescription();
  cardArray.forEach(function (el) {
    console.log(el.id, idCard);

    if (el.id === +idCard) {
      el.title = title;
      el.description = description;
      console.log(true, el);
    }
  });
} //todoNumberCard///////////////////////////////////////////////


var numberTodo = document.querySelector(".todo__number");

function todoNumberCard() {
  var numberTodoCard = 0;
  cardArray.forEach(function (el) {
    if (el.status == "neutral") {
      ++numberTodoCard;
    }

    numberTodo.innerText = numberTodoCard;
  });
} //progressNumberCard///////////////////////////////////////////


var numberProgress = document.querySelector(".progress__number");

function progressNumberCard() {
  var numberProgressCard = 0;
  cardArray.forEach(function (el) {
    if (el.status == "inprogress") {
      ++numberProgressCard;
    }

    numberProgress.innerText = numberProgressCard;
  });
} //doneNumberCard///////////////////////////////////////////


var numberDone = document.querySelector(".done__number");

function doneNumberCard() {
  var doneProgressCard = 0;
  cardArray.forEach(function (el) {
    if (el.status == "done") {
      ++doneProgressCard;
    }

    numberDone.innerText = doneProgressCard;
  });
} //


function createTodoCat() {
  var p = document.querySelector("#todo__img");
  p.classList.add("active");
}

function deleteTodoCat() {
  var p = document.querySelector("#todo__img");
  p.classList.remove("active");
}

function createProgressCat() {
  var p = document.querySelector("#progress__img");
  p.classList.add("active");
}

function deleteProgressCat() {
  var p = document.querySelector("#progress__img");
  p.classList.remove("active");
}

function createDoneCat() {
  var p = document.querySelector("#done__img");
  p.classList.add("active");
}

function deleteDoneCat() {
  var p = document.querySelector("#done__img");
  p.classList.remove("active");
} // ///////////////////////////////////////////


var doneImg = document.querySelector("#done__img");

function rove() {
  var doneCard = 0;
  var numberProgressCard = 0;
  var numberTodoCard = 0;
  cardArray.forEach(function (el) {
    if (el.status == "done") {
      ++doneCard;
    }

    if (el.status == "inprogress") {
      ++numberProgressCard;
    }

    if (el.status == "neutral") {
      ++numberTodoCard;
    }
  });

  if (numberTodoCard > 0) {
    createProgressCat();
    deleteDoneCat();
  }

  if (numberProgressCard > 0) {
    deleteProgressCat();
    createDoneCat();
  }

  if (doneCard > 0) {
    deleteDoneCat();
  }
} //Прослушка при перезагрузке


window.addEventListener("load", function () {
  var localCardArray = (0, _getDataFromLocalStorage.getLocalCardArray)(cardArray);
  localCardArray ? exports.cardArray = cardArray = localCardArray : exports.cardArray = cardArray = [];
  (0, _render.render)(cardArray);
});
},{"./getDataFromLocalStorage.js":"../src/scripts/getDataFromLocalStorage.js","./render.js":"../src/scripts/render.js"}],"../src/scripts/changeSatusCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllCard = deleteAllCard;
exports.deleteCard = deleteCard;
exports.editCard = editCard;
exports.goBackCard = goBackCard;
exports.goDoneCard = goDoneCard;
exports.inProgressCard = inProgressCard;

var _createElements = require("./createElements.js");

var _render = require("./render.js");

var _modalWindow = require("./modalWindow.js");

var _getDataFromLocalStorage = require("./getDataFromLocalStorage.js");

function editCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");

  _createElements.cardArray.forEach(function (el) {
    if (el.id == idCard) {
      (0, _modalWindow.createModalWindowEdit)();
      (0, _getDataFromLocalStorage.pushTitleFromLocalToModalEdit)(el);
      (0, _getDataFromLocalStorage.pushDescriptionFromLocalToModalEdit)(el);
    }
  });

  return idCard;
} // Delete card//////////////////////


function deleteCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");

  _createElements.cardArray.forEach(function (el) {
    if (el.id == idCard) {
      el.status = "deleted";
    }
  });

  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _render.render)(_createElements.cardArray);
} // Go In progress card//////////////////////


function inProgressCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");

  _createElements.cardArray.forEach(function (el) {
    if (el.id == idCard) {
      el.status = "inprogress";
    }
  });

  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _render.render)(_createElements.cardArray);
} //GoBack card//////////////////////


function goBackCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");

  _createElements.cardArray.forEach(function (el) {
    if (el.id == idCard) {
      el.status = "neutral";
    }
  });

  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _render.render)(_createElements.cardArray);
} //GoDone card//////////////////////


function goDoneCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");

  _createElements.cardArray.forEach(function (el) {
    if (el.id == idCard) {
      el.status = "done";
    }
  });

  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _render.render)(_createElements.cardArray);
} //Delete all card//////////////////////


function deleteAllCard(event, idCard) {
  _createElements.cardArray.forEach(function (el) {
    if (el.status == "inprogress" || el.status == "neutral" || el.status == "done") {
      el.status = "deleted";
    }
  });

  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _render.render)(_createElements.cardArray);
}
},{"./createElements.js":"../src/scripts/createElements.js","./render.js":"../src/scripts/render.js","./modalWindow.js":"../src/scripts/modalWindow.js","./getDataFromLocalStorage.js":"../src/scripts/getDataFromLocalStorage.js"}],"../src/scripts/index.js":[function(require,module,exports) {
"use strict";

var _clock = require("./clock.js");

var _modalWindow = require("./modalWindow.js");

var _createElements = require("./createElements.js");

var _getDataFromLocalStorage = require("./getDataFromLocalStorage.js");

var _render = require("./render.js");

var _changeSatusCard = require("./changeSatusCard.js");

// Пользователи
var idCard;
fetch("https://api.sampleapis.com/futurama/characters").then(function (response) {
  return response.json();
}).then(function (data) {
  users = data;
  renderUsers(users);
  renderUsersEdit(users);
  console.log(data);
});
var users = [];

function renderUsers(users) {
  users.forEach(function (el) {
    var select = document.querySelector("#select");
    var option = document.createElement("option");
    option.innerText = "".concat(el.name.first, " ").concat(el.name.middle, " ").concat(el.name.last);
    select.append(option);
  });
}

function renderUsersEdit(users) {
  users.forEach(function (el) {
    var selectEdit = document.querySelector("#selectEdit");
    var option = document.createElement("option");
    option.innerText = "".concat(el.name.first, " ").concat(el.name.middle, " ").concat(el.name.last);
    selectEdit.append(option);
  });
} //Часы/////////////////////////////////////////////////


window.onload = (0, _clock.getTime)(); //Прослушка по нажатию на "add todo"

var addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
  (0, _modalWindow.createModalWindow)();
}); //Прослушка по нажатию на "confirm" при добавлении карточки

var confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.addEventListener("click", function () {
  (0, _createElements.createCard)();
  (0, _createElements.createCardInLocal)();
  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _getDataFromLocalStorage.getLocalCardArray)(_createElements.cardArray);
  (0, _modalWindow.deleteModalWindow)();
  (0, _render.render)(_createElements.cardArray);
  (0, _modalWindow.cleaningInput)();
}); //Прослушка по нажатию на "cancel" при добавлении карточки

var cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener("click", function () {
  (0, _modalWindow.deleteModalWindow)();
}); //Прослушка по нажатию на "delete", "edit","">""

var trello__row = document.querySelector(".trello__row");
trello__row.addEventListener("click", function (event) {
  if (event.target.className == "deleteBtn") {
    idCard = (0, _changeSatusCard.deleteCard)(event, idCard);
  }

  if (event.target.className == "editBtn") {
    idCard = (0, _changeSatusCard.editCard)(event, idCard);
  }

  if (event.target.className == "pushBtn") {
    var numberProgress = document.getElementById("progress__number").textContent;

    if (numberProgress < 6) {
      idCard = (0, _changeSatusCard.inProgressCard)(event, idCard);
    } else {
      (0, _modalWindow.createModalWindowLimitation)();
      var limitationConfirmBtn = document.querySelector(".limitation__confirmBtn");
      limitationConfirmBtn.addEventListener("click", function () {
        (0, _modalWindow.deleteModalWindowLimitation)();
      });
    }
  }

  if (event.target.className == "backBtn") {
    idCard = (0, _changeSatusCard.goBackCard)(event, idCard);
  }

  if (event.target.className == "completeBtn") {
    idCard = (0, _changeSatusCard.goDoneCard)(event, idCard);
  }

  if (event.target.className == "deleteDoneBtn") {
    idCard = (0, _changeSatusCard.deleteCard)(event, idCard);
  }
});
var confirmEditBtn = document.querySelector(".confirmEditBtn");
confirmEditBtn.addEventListener("click", function () {
  console.log(idCard);
  (0, _createElements.changeCardInLocal)(idCard);
  (0, _createElements.saveCardArray)(_createElements.cardArray);
  (0, _modalWindow.deleteModalWindowEdit)();
  (0, _render.render)(_createElements.cardArray);
}); //Прослушка по нажатию на "cancel" при редактировании карточки

var cancelEditBtn = document.querySelector(".cancelEditBtn");
cancelEditBtn.addEventListener("click", function () {
  (0, _modalWindow.deleteModalWindowEdit)();
});
var url = "https://jsonplaceholder.typicode.com/users"; //Прослушка по нажатию 'Delete All'

var deleteAllBtn = document.querySelector(".deleteAllBtn");
deleteAllBtn.addEventListener("click", function () {
  (0, _modalWindow.createModalWindowWarning)();
}); //Прослушка по нажатию на 'confirm' в модальном окне delete All

var warningConfirmBtn = document.querySelector(".warning__confirmBtn");
warningConfirmBtn.addEventListener("click", function () {
  (0, _changeSatusCard.deleteAllCard)();
  (0, _modalWindow.deleteModalWindowWarning)();
}); //Прослушка по нажатию на 'cancel' в модальном окне delete All

var warningCancelBtn = document.querySelector(".warning__canselBtn");
warningCancelBtn.addEventListener("click", function () {
  (0, _modalWindow.deleteModalWindowWarning)();
}); //Прослушка по нажатию на 'cancel' в модальном окне limitation

var limitationCancelBtn = document.querySelector(".limitation__canselBtn");
limitationCancelBtn.addEventListener("click", function () {
  (0, _modalWindow.deleteModalWindowLimitation)();
});
},{"./clock.js":"../src/scripts/clock.js","./modalWindow.js":"../src/scripts/modalWindow.js","./createElements.js":"../src/scripts/createElements.js","./getDataFromLocalStorage.js":"../src/scripts/getDataFromLocalStorage.js","./render.js":"../src/scripts/render.js","./changeSatusCard.js":"../src/scripts/changeSatusCard.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63100" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/scripts/index.js"], null)
//# sourceMappingURL=/scripts.45c95d8c.js.map