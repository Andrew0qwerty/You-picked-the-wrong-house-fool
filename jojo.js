const { text } = require("express");

class jojo {
  text = () => "lorem is a dummy text. We know everything in...";

  num = (a, b) => a + b;
}

module.exports = new jojo();
