/*
Scenario-1: Deposit should be of the fixed Deposit (FD) type on locking amount for a fix period
Scenario-2: Deposit should be of the Recurring Deposit (RD) type for an amount
deposited with regular frequency (that is, monthly, quarterly, half-yearly, yearly,
and so on)
*/
 
describe("Bank Deposit ", function () {

    //Scenario 1
    it("should be considered as FD on locking amount for a fixed period", function () {
         
        var deposite = new Deposit('FIX');
        var depositeType = deposite.BankDeposit();
        expect(depositeType).toBe("FD");
        expect(depositeType).not.toBe("RD");
    });
    //Scenario 2
    it("should be considered as RD on depositing amount on regular frequency", function () {
        var deposite = new Deposit("RECURRING");
        var depositeType = deposite.BankDeposit();
         expect(depositeType).toBe("RD");
         expect(depositeType).not.toBe("FD");
    });

});