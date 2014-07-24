/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require ('../../app/models/weather');

describe ('Weather', function (){
  describe ('constructor', function (){
  });
  describe ('.high', function (){
    it('should get the high temperature for today', function(done){
      Weather.high(37203, function(temp){
      
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });
  describe ('.low', function (){
    it('should return the low temperature for today', function(done){
      Weather.low(37203, function(temp){

        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });
  describe ('.avgHigh', function(){
    it('should return the avg high temperature for 10 days', function(done){
      Weather.avgHigh(37203, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });
  describe ('.avgLow', function(){
    it('should return the avg low temperature for 10 days', function(done){
      Weather.avgLow(37203, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });
  describe ('.highs', function(){
    it('should return all the high temperatures for 10 days', function(done){
      Weather.highs(37203, function(highs){
        expect(highs.length).to.equal(10);
        done();
      });
    });
  });
  describe ('.lows', function(){
    it('should return all the low temperatures for 10 days', function(done){
      Weather.lows(37203, function(lows){
        expect(lows.length).to.equal(10);
        done();
      });
    });
  });
  describe ('.deltas', function(){
    it('should return all the temperature changes for 10 days', function(done){
      Weather.deltas(37203, function(deltas){
        expect(deltas.length).to.equal(10);
        done();
      });
    });
  });
  describe ('.moon', function(){
    it('should return the reading of the phases of the moon', function(done){
      Weather.moon(37203, function(moon){
        expect(moon).to.equal('Crescent');
        done();
      });
    });
  });
});
