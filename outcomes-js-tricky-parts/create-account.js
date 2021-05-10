function createAccount(pin, amount=0) {
    return {
        pin: pin,
        balance: amount,
        checkBalance: function(pinGuess) {
            if (pinGuess === this.pin) {
                return `$${this.balance}`;
            };
            return "Invalid PIN."
        },
        deposit: function(pinGuess, deposit) {
            if (pinGuess === this.pin) {
                this.balance += deposit;
                return `Successfully deposited $${deposit}. Current balance: $${this.balance}.`;
            };
            return "Invalid PIN."
        },
        withdraw: function(pinGuess, withdraw) {
            if (pinGuess === this.pin) {
                if (withdraw > this.balance) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                };
                this.balance -= withdraw;
                return `Successfully withdrew $${withdraw}. Current balance: $${this.balance}.`;
            };
            return "Invalid PIN."
        },
        changePin: function(pinGuess, newPin) {
            if (pinGuess === this.pin) {
                this.pin = newPin;
                return "PIN successfully changed!";
            };
            return "Invalid PIN."
        }
    };
};


module.exports = { createAccount };

