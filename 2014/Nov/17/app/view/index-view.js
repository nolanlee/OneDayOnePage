module.exports = function() {
  this.ele = document.querySelector("#container");

  this.render = function(content) {
    this.ele.innerHTML = content;
  };
};