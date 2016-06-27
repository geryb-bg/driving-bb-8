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
    var errorColour = 0xff3300; //red
    var startColor = 0xFFFFFF; //white

    my.bb8.on('collision', function() {
        console.log("Collision detected!!!");
        console.log("STOP");
        my.bb8.stop();

        console.log("Error colour");
        my.bb8.color(errorColour);

        after(2000, function() {
            console.log("Everything is ok, just turn around");
            console.log("Normal colour");
            my.bb8.color(startColor);
            console.log("Back")
            my.bb8.roll(60, 180);
        });
    });

    my.bb8.color(startColor);
    my.bb8.detectCollisions();
    my.bb8.roll(100, 0);

    //after 10 seconds stop
    after(20000, function() {   
        console.log("Done!")           
        my.bb8.stop();
    });
  }
}).start();