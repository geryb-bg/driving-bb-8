"use strict";
process.env['CYLON_TEST'] = true;

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

var expect = chai.expect;

var clock = sinon.useFakeTimers();
var Cylon = require('cylon');
Cylon.config({ testMode: true });
require("../firstrun.js");

describe("robot", function () {
  var robot;  
  before(() => {
    robot = Cylon.MCP.robots["first"];    
  });

  it("should have work", function () {
    expect(robot.work).to.be.a('function');
  }); 

  it("should define bb8", function () {
    expect(robot.devices.bb8).to.exist;
  })

  it("should call color after 1 second", function() {    
	var bb8 = robot.devices.bb8;
    var color = sinon.stub(bb8, 'color');
	
    clock.tick(1000);
    expect(color).to.have.been.called;
  });
});