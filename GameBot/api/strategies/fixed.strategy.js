const os = require("os");
const { RPSLSChoices } = require('../settings/rpslsOptions');

class FixedStrategy {

    constructor(choice) {
        this.choice = choice;
    }

    pick() {

        var bet = null;
        if (process.env.FF_BETS) {
            // The bet of Humans that they will win
            // value of 1 means if Humans win, they will get 2x of the score - if they loose they loose 2x of the score
            // If null the Humans player does not support bets, value needs to be between 0 and 1
            bet = Math.random();
        }
        
        return {
            "playerType": "node",
            "player": os.hostname(),
            "text": this.choice,
            "bet": bet,
            "value": RPSLSChoices.indexOf(this.choice)
        };
    }
}

module.exports = FixedStrategy;