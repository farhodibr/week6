class Card {
    constructor (suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck{
    constructor (){
        this.cards = [];
    }

    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for(let i = 0; i < suits.length; i++) {
            for (let x = 0; x < ranks.length; x++) {
                this.cards.push(new Card(suits[i], ranks[x], values[x]));
            }
        }
        //return this.cards;
        
    }

    shuffleDeck() {

        let temp;
        let j;
        let x;
        for (let i = 0; i < this.cards.length; i++) {
            j = Math.floor(Math.random() * this.cards.length);
            temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        //return this.cards;
    }
}

class GameBoard {
    constructor (player1, player2) {
        this.players = [];
        this.player1 = player1;
        this.player2 = player2;
        this.player1Cards = [];
        this.player2Cards = [];
        this.player1Score = 0;
        this.player2Score = 0;
    }

        splitDeck() {
            let deck = new Deck();
           deck.createDeck();
           deck.shuffleDeck();
            this.player1Cards = deck.cards.slice(0 , 26);
            this.player2Cards = deck.cards.slice(26, 52);
            console.log(this.player1Cards);
            console.log(this.player2Cards);
        }

        playWar() {
            for (let i = 0; i < this.player1Cards; i ++) {
                
                console.log(this.player1Cards[i]);
                console.log(this.player2Cards[i]);
                console.log('*************************');

                if (this.player1Cards[i] > this.player2Cards) {
                        this.player1Score += 1;
                        console.log(this.player1Score);
                } else if (this.player1Cards[i] < this.player2Cards) {
                        this.player2Score += 1;
                        console.log(this.player2Score);
                } else {
                    console.log('Even');
                }
            }
        }
    }






//let newDeck = new Deck();
//console.log(newDeck.createDeck());
//console.log(newDeck.shuffleDeck());
let newPlayers = new GameBoard;
newPlayers.splitDeck('a', 'b');
newPlayers.playWar('a', 'b');