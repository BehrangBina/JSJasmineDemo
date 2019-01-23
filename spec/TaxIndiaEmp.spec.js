describe("Tax/TDS Currency", function () {

    var myRegion;

    beforeEach(function () {
        myRegion = ["INDIA", "UK", "US"];

    });

    it("Currency should be used INR", function () {

        myCurrency = new Currency(myRegion[0]);
        expect(myCurrency.currency).toBe("INR");
    });
    it("Currency should be used GBP (Pound, UK£)", function () {
        myCurrency = new Currency(myRegion[1]);
        expect(myCurrency.currency).toBe("UK£");
    });
    it("Currency should be used USD (US$)", function () {
        myCurrency = new Currency(myRegion[2]);
        expect(myCurrency.currency).toBe("US$");
    });

});
describe("TAX FOR INDIAN EMP.", function () {
    var grossTaxableIncome, myTaxableIncome;
    beforeAll(function () {
        grossTaxableIncome = [300000, 700000, 1300000];
        myTaxableIncome = new TaxIndiaEmp();
    })
    //Scenario -4
    it("Should be deducted 10% if Gross Income is " + "between RS 250,000/- and RS 500,000/-", function () {
        //Let's assume the taxable income is RS 300,000/-   

        myTaxableIncome.setIncome(grossTaxableIncome[0]);
        var taxable = myTaxableIncome.CalculateTDS();
        expect(taxable).toEqual(5000);
    });
    //Scenario -5
    it("Should be deducted 20% if Gross Income is between RS 500,000/- and RS 1,000,000/-", function () {
        //Let's assume the taxable income is RS 700,000/-
        myTaxableIncome.setIncome(grossTaxableIncome[1]);
        var taxable = myTaxableIncome.CalculateTDS();
        expect(taxable).toEqual(40000);
    });
    //Scenario -6
    it("Should be deducted 30% if Gross Income is >RS 1,000,000/-", function () {
        myTaxableIncome.setIncome(grossTaxableIncome[2]);
        //Let's assume the taxable income is RS 1,300,000/-
        var taxable = myTaxableIncome.CalculateTDS();
        expect(taxable).toEqual(90000);
    });
});