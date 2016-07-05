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
    var direction = 0;

    my.bb8.on('collision', function() {
        console.log("Collision detected!!!");
        console.log("STOP");
        my.bb8.stop();

        console.log("Error colour");
        my.bb8.color(errorColour);
        
        after(5000, function() {
            console.log("Everything is ok, just turn around");
            console.log("Normal colour");
            my.bb8.color(startColor);
            direction = Math.floor(Math.random() * 360);
            console.log("dir: " + direction);
            my.bb8.roll(100, direction);
        });        
    });

    my.bb8.color(startColor);
    my.bb8.detectCollisions();
    my.bb8.roll(100, direction); 

    after(20000, function() {
      console.log("Cancelled")   
      my.bb8.color(0x000000);        
      my.bb8.stop();
    });   
  }
}).start();