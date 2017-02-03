"use strict";

var Cylon = require("cylon");

var datajson = require('../data.json');

var myUUId = datajson.devices.bb8;

Cylon.robot({
    name: "leapBot",

    connections: {
        leapmotion: { adaptor: "leapmotion" }
    },

    devices: {
        leapmotion: { driver: 'leapmotion', connection: 'leapmotion' }
    },

    work: function(my) {
    }
}).start();

Cylon.robot({
    name: "bb8Bot",

    connections: {
        bluetooth: { adaptor: 'central', uuid: myUUId, module: 'cylon-ble' }
    },

    devices: {
        bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
    },

    work: function (my) {
        var rolling = false;
        var direction = 0; //forward

         leap.on("hand", function(hand) {

            var handOpen = !!hand.fingers.filter(function (finger) {
                return finger.extended;
            }).length;
        
            if (handOpen) {
                if (hand.palmNormal[2] < -0.4) {    
                     if (rolling && direction != 0) {
                         rolling = false;
                         direction = 0;
                         console.log("Pause");
                         bb8.stop();
                     }

                    if (!rolling) {
                        rolling = true;
                        console.log("Forward");
                        bb8.roll(60, direction);
                    }
                }
                else if (hand.palmNormal[2] > 0.1) {
                    if (rolling && direction != 180) {
                        rolling = false;
                        direction = 180;
                        console.log("Pause");
                        bb8.stop();
                    }

                    if (!rolling) {
                        rolling = true;
                        console.log("Backwards");
                        bb8.roll(60, direction);
                    }
                }
                else {
                    if (rolling) {
                        rolling = false;
                        console.log("Stop inner");
                        bb8.stop();
                    }
                }
            } else {
                if (rolling) {
                    rolling = false;
                    console.log("Stop hand closed");
                    bb8.stop();
                }
            }
         });
    } 
}).start();

var leap = Cylon.MCP.robots.leapBot.devices.leapmotion;
var bb8 = Cylon.MCP.robots.bb8Bot.devices.bb8;