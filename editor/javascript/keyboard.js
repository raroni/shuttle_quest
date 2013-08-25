(function() {
  var keyCodeMap = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
  };

  function Keyboard(controller) {
    this.controller = controller;
    document.addEventListener('keydown', this.keyPressed.bind(this));
    this.intestingKeys = ['up', 'down', 'right', 'left', 'c', 'd', 'r', 'w'];
  }

  Keyboard.prototype = {
    keyPressed: function(e) {
      var keyName = keyCodeMap[e.keyCode];
      if(this.intestingKeys.indexOf(keyName) !== -1) {
        this.controller[keyName + 'Pressed']();
      }
      e.preventDefault();
    }
  };

  window.Keyboard = Keyboard;
})();
