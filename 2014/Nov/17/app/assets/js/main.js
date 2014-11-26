require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('controller/index-controller').init();



},{"controller/index-controller":"0brQJ9"}],"0brQJ9":[function(require,module,exports){
var model, view;

view = require('view/index-view');

model = require('model/index-model');

module.exports = {
  init: function() {
    var content;
    content = JSON.stringify(new model());
    return new view().render(content);
  }
};



},{"model/index-model":"lXm5gm","view/index-view":"kF2yTq"}],"controller/index-controller":[function(require,module,exports){
module.exports=require('0brQJ9');
},{}],"lXm5gm":[function(require,module,exports){
module.exports = function() {
  return {
    name: 'Nolan',
    age: '23',
    comment: 'I came form coffeescript'
  };
};



},{}],"model/index-model":[function(require,module,exports){
module.exports=require('lXm5gm');
},{}],"view/index-view":[function(require,module,exports){
module.exports=require('kF2yTq');
},{}],"kF2yTq":[function(require,module,exports){
module.exports = function() {
  this.ele = document.querySelector('#container');
  this.render = function(content) {
    return this.ele.innerHTML = content;
  };
};



},{}]},{},[1,"0brQJ9","lXm5gm","kF2yTq"])
;