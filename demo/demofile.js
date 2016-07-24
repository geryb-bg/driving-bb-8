var Cylon = require('cylon');

var datajson = require('../data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    var red = 0xff0000;
    var green = 0x00ff00;
    var blue = 0x0000ff;
    var white = 0xffffff;
    var black = 0x000000;
    var bitFilter = 0xFFFF00;
    var random = red ^ bitFilter;

    
  }
}).start();