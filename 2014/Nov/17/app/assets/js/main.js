require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./controller/index-controller.coffee').init();



},{"./controller/index-controller.coffee":2}],2:[function(require,module,exports){
var model, view;

view = require('./../view/index-view.coffee');

model = require('./../model/index-model.coffee');

module.exports = {
  init: function() {
    var content;
    content = JSON.stringify(new model());
    return new view().render(content);
  }
};



},{"./../model/index-model.coffee":3,"./../view/index-view.coffee":4}],3:[function(require,module,exports){
require('external');

module.exports = function() {
  return {
    name: 'Nolan',
    age: '23',
    comment: 'I came form coffeescript'
  };
};



},{"external":"external"}],4:[function(require,module,exports){
module.exports = function() {
  this.ele = document.querySelector('#container');
  this.render = function(content) {
    return this.ele.innerHTML = content;
  };
};



},{}],"external":[function(require,module,exports){
alert('I come from external');
},{}]},{},[1,2,3,4]);
