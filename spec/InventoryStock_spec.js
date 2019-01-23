/*
Scenario-1: Inventory Stock should be updated on account of item(s) sale or issue of item(s)
Scenario-2: Inventory stock should be updated on return of any item(s)
Scenario-3: Inventory stocks should be updated on receiving/procuring new item(s)
*/

describe("Inventory Stock", function () {

    beforeEach(function () {
        this.stockinhand_item1 = 11, this.item1 = 1;
        console.log("beforeEach: Stock in hand for item1 before spec execution = " + this.stockinhand_item1);
    });
    afterEach(function () {
        this.stockinhand_item1 = 0, this.item1 = 0;
        console.log("afterEach: Stock in hand for item1 once spec executed = " + this.stockinhand_item1);
    });

    //Scenario – 1
    it("Inventory Stock should be updated on sale/issue of an item", function () {

        var transaction = 'SALE';
        expect(this.stockinhand_item1 - this.item1).toEqual(10);


    });
    it("Inventory Stock should be updated on issue of an item within organization", function () {
        var stokInHanditem1 = 11;
        var item1 = 1;
        var transaction = 'ISSUE';
        expect(this.stockinhand_item1 - this.item1).toBe(10);
    });
    //Scenario - 2
    it("Inventory Stock should be updated on return of any item",
        function () {

            var transaction = 'SALE RETURN';
            expect(this.stockinhand_item1 + this.item1).toEqual(12);
        });
    //Scenario - 3
    it("Inventory Stock should be updated on receiving or procuring new item", function () {

        var transaction = 'PROCUREMENT';
        expect(this.stockinhand_item1 + this.item1).toEqual(12);
    });
});