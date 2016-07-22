var Cylon = require('cylon');

var datajson = require('../data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
  name: "testbot",

  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    every((1).second(), function() {
      my.bb8.getColor();
    });
  }
}).start();