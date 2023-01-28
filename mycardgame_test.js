var expect = chai.expect;

describe('My functions', function() {
    describe('#createDeck()', function() {
        it('should create an array with a length of 52 indexes ', function() {
           
            var x = new Deck;
            var y = x.createDeck('a', 'b');
            var i = x.cards;
            expect(i).to.be.an('array'); // checking x.cards if array created;
            expect(i).to.have.a.lengthOf(52); // checking if x.cards has a length of 52;
            expect(x).to.be.an('object');  // checking if new Deck is an object;

        });

        it('should throw an error if parametr is not an array', function() {
            expect(function() {
                
                Deck('a', 'b');

            }).to.throw(Error);
        })
    })
})
