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
           // console.log(this.player1Cards);
           // console.log(this.player2Cards);
        }
    }

    class PlayGame extends GameBoard {
        constructor (player1, player2) {
            super(GameBoard);
            this.player1 = player1;
            this.player2 = player2;
        }
        playWar(player1, player2) {
            let play = new GameBoard;
            play.splitDeck();
            for (let i = 0; i < play.player1Cards.length; i ++) {
                
                console.log( `Player ${player1} has card: ` + ' suit ' + 
                play.player1Cards[i].suit + ', rank ' +
                play.player1Cards[i].rank + ', value ' +
                play.player1Cards[i].value);
                console.log( `Player ${player2} has card: ` + ' suit ' + 
                play.player2Cards[i].suit + ', rank ' +
                play.player2Cards[i].rank + ', value ' +
                play.player2Cards[i].value);
                console.log('************************* \n');

                if (play.player1Cards[i].value > play.player2Cards[i].value) {
                        this.player1Score += 1;
                        console.log(`${player1}'s score:   ${this.player1Score} \n
                                \n` );
                } else if (play.player1Cards[i].value < play.player2Cards[i].value) {
                        this.player2Score += 1;
                        console.log(`${player2}'s score:   ${this.player2Score} \n
                                \n`);
                } else {
                    console.log('Even \n');
                }
                
            }
            console.log(`Final score is
                ${player1} : ${this.player1Score}
                ${player2} : ${this.player2Score} `)

                if (this.player1Score > this.player2Score) {
                    console.log(`${player1} IS A WINNER`);
                } else if (this.player1Score < this.player2Score) {
                    console.log(`${player2} IS A WINNER`);
                } else {
                    console.log('The score is tie. No wiiners.')
                }
        }
    }






//let newDeck = new Deck();
//console.log(newDeck.createDeck());
//console.log(newDeck.shuffleDeck());
let newPlayers = new GameBoard;
newPlayers.splitDeck('a', 'b');
let newGame = new PlayGame;
newGame.playWar('a', 'b');