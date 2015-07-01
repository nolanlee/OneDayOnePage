var EventManager = function EventManager() {
  this.__container = {};
};

EventManager.prototype.attachEvent = function (event, handler) {
  var o = this.__container;

  if (typeof event === "string" && typeof handler === "function") {
    if (event in o && o[event].length > 0) {
      for (var i = 0, l = o[event].length; i < l; i++) {
        if (o[event][i] === handler) {
          return;
        }
      }
      o[event][l] = handler;
    } else {
      o[event] = [handler];
    }
  } else {
    throw new Error("Illegal Argument");
  }
};

EventManager.prototype.fireEvent = function (event) {
  var o = this.__container;
  var args = [].slice.call(arguments, 1);

  if (event in o) {
    for (var i = 0, l = o[event].length; i < l; i++) {
      o[event][i].apply(this, args);
    }
  }
};

EventManager.prototype.removeHandler = function (event, handler) {
  var o = this.__container;

  if (typeof event === "string" && typeof handler === "function") {
    if(event in o) {
      for(var i = o[event].length; i--;) {
        if(o[event][i] === handler) {
          o[event].splice(i, 1);
          break;
        }
      }
    }
  } else {
    throw new Error("Illegal Argument");
  }
};

EventManager.prototype.detachEvent = function (event) {
  var o = this.__container;

  if (event in o) {
    delete o[event];
  }
};

EventManager.prototype.detachAllEvents = function () {
  this.__container = {};
};