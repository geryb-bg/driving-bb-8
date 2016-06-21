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
      var errorColour = 0xff3300; //red
      var startColor = 0xFFFFFF; //white

      my.bb8.on('collision', function() {
          //stop bb8
          my.bb8.stop();

          //change colour to error
          my.bb8.color(errorColour);
          
          //after half a second:
          //change colour back
          //turn around and carry on
          after(500, function() {
              my.bb8.color(startColor);
              my.bb8.roll(60, 180);
          });          

          //after 3 seconds stop
          after(3000, function() {              
              my.bb8.stop();
          });
      });

      my.bb8.color(startColor);
      my.bb8.detectCollisions();
      my.bb8.roll(60, 0);
  }
}).start();