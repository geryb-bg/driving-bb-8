"use strict";
process.env['CYLON_TEST'] = true;

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.should();
chai.use(sinonChai);

var clock = sinon.useFakeTimers();
var Cylon = require('cylon');
Cylon.config({ testMode: true });
require("../firstrun.js");

describe("robot", function () {
  var robot, bb8, color;
  
  before(() => {
    robot = Cylon.MCP.robots["first"];
    bb8 = robot.devices.bb8;
    color = sinon.stub(bb8, 'getColor');
  });


  it("should have work", function () {
    return robot.work.should.be.a('function');
  }); 

  it("should call color after 1 second", function() {    
    clock.tick(1000);
    expect(color).to.have.been.called;
  });
});