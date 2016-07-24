var Cylon = require('cylon');

var datajson = require('./data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {

    var random = 0xff0000;
    var bitfilter = 0x00ff00;

    for (var i = 0; i < 6; i++) {
      after(500, function() {
          random = random ^ bitfilter;
          my.bb8.color(random);
      });
      i++;     
    }    

    after(600, function() {
        my.bb8.stop();
        my.bb8.color(0x000000);
    });
  }
}).start();