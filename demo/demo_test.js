"use strict";
process.env['CYLON_TEST'] = true;

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

var expect = chai.expect;
chai.should();

var Cylon = require('cylon');
Cylon.config({ testMode: true });
require("./testbot.js");

describe("robot", function () {
    //before


    //tests
});