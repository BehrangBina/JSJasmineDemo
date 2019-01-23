function Deposit(Frequency) {
    this.Type = Frequency;
}

Deposit.prototype.BankDeposit = function () {
    switch (this.Type) {
        case "FIX":
            return "FD";
        case "RECURRING":         
            return "RD";
        default:
            return  this.type+ " Not Defined as a Bank Deposite Type";
    }
};