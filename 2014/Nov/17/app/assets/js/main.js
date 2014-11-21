(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./controller/index-controller.js').init();


},{"./controller/index-controller.js":2}],2:[function(require,module,exports){
var view = require('../view/index-view');
var model = require('../model/index-model');

module.exports = {
  init: function() {
    var content = JSON.stringify(new model());
    new view().render(content);
  }
};
},{"../model/index-model":3,"../view/index-view":4}],3:[function(require,module,exports){
module.exports = function() {
  return {
    name: 'Nolan',
    age: '23'
  }
};
},{}],4:[function(require,module,exports){
module.exports = function() {
  this.ele = document.querySelector("#container");

  this.render = function(content) {
    this.ele.innerHTML = content;
  };
};
},{}]},{},[1,2,3,4])