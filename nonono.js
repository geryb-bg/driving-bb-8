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
    // var audio = new Audio('audio_file.mp3');
    // audio.play();

    my.bb8.color(0xff0000);
    for (var i = 0; i < 6; i++) {
      after((100 * i), function() {
        my.bb8.spin("left", 100);
      });

      after((100 * (i+1)), function() {
        my.bb8.spin("right", 100);
      }); 
      i++;     
    }    

    after(600, function() {
        my.bb8.stop();
        my.bb8.color(0x000000);
    });
  }
}).start();