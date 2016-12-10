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
        leap.on("hand", function(hand) {           
            if (hand.palmNormal[2] < -0.2) {                
                if (!rolling) {
                    rolling = true;
                    console.log(rolling);
                    bb8.roll(30,0);                    
                }
            } else {                
                if (rolling) {
                    rolling = false;
                    console.log(rolling);
                    bb8.stop();
                }
            }
        });
    } 
}).start();

var leap = Cylon.MCP.robots.leapBot.devices.leapmotion;
var bb8 = Cylon.MCP.robots.bb8Bot.devices.bb8;