var expect = chai.expect;

describe('My functions', function() {
    describe('#createDeck()', function() {
        it('should create deck', function() {
            var x = createDeck('x', 'y');
            expect(x).to.equal(Array);
        });

        it('should throw an error if parametr is not an array', function() {
            expect(function() {
                createDeck(); 

            }).to.throw(Error);
        })
    })
})
