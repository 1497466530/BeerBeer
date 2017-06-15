/**
 * Created by Paul Shi on 2017/6/15.
 * Description: a test
 */

let should = require('should');
let assert = require('assert');

describe('test framework', () => {
    it('assert test', () => {
        assert.equal(true, true);
    });
    it('should test', () => {
        should.equal(true, true);
        true.should.eql(true);
    });
});

