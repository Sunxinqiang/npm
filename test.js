var assert = require('assert');
var validate = require('./index.js');
describe('npm-test-sunxinqiang',function(){
  describe('#mobileValidate',function(){
    it('should return true when the validate mobile 18888888888 number puts in',function(){
      assert.equal(true, validate.mobileValidate('18888888888'));
    });
    it('should return false when the wrong number 11111111111 puts in', function(){
      assert.equal(false, validate.mobileValidate('11111111111'));
    });
  });
});