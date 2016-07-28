var Cylon = require('cylon');

var datajson = require('../data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
  name: "testbot",

  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    
  },

  work: function(my) {
    my.bb8.color(0xffffff);    
  }
}).start();