const router = require("../routes/");
const assert = require("assert");

describe('router', function() {
    describe('get(/)', function(){
        it('Hello mocha', function() {
            const msg = 'mocha';
            assert.equal('Hello ' + msg, router.hello(msg));
        });
    });
});