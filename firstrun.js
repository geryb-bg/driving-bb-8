var Cylon = require('cylon');

var datajson = require('./data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
  name: "first",

  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    my.devices.bb8.color(0xffffff);    
  }
}).start();