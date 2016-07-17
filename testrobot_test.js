"use strict";

        process.env.NODE_ENV = 'test';

        // setup for tests
        var chai = require('chai'),
            sinon = require('sinon'),
            sinonChai = require('sinon-chai');

        var expect = chai.expect;
        chai.use(sinonChai);

        var clock = sinon.useFakeTimers();

        // load the robot, in test mode
        var Cylon = require('cylon');

        Cylon.config({ testMode: true })

        require('./testrobot.js');

        describe("TestBot", function() {
          var robot = Cylon.MCP.robots["TestBot"];

          it("should have work", function() {
            expect(robot.work).to.be.a('function');
          });

          it("should toggle the LED after one second", function() {
            var led = robot.led,
                toggle = sinon.stub(led, 'toggle');

            clock.tick(1000);
            expect(toggle).to.have.been.called;
          });
        });
