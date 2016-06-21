var Cylon = require('cylon');

var myUUId = '???'

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    my.bb8.color(0xFFFFFF); //white

    after(500, function() {
      console.log("Red")
      my.bb8.color(0xff3300);
    });

    after(1000, function() {
      console.log("Blue")
      my.bb8.color(0x0066cc); //blue
    });

    after(2000, function() {
      console.log("Forward")
      my.bb8.roll(60, 0);
    });

    after(4000, function() {
      console.log("Back")
      my.bb8.roll(60, 180);
    });

    after(6000, function() {
      console.log("Stop")
        my.bb8.color(0xFFFFFF); //white
        my.bb8.stop();
    });    
  }
}).start();