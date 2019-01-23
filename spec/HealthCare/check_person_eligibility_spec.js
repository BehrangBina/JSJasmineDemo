describe("<ABC> Company: Health Care Solution, ", function () {
    describe("When to donate or receive blood, ", function () {
        it("Person's age should be greater than or equal to 18 years",  function () {
            var testPersonCriteria   = new Candidate();
            spyOn(testPersonCriteria, "getAge");
            testPersonCriteria.ValidateAge("10/25/1990");
            expect(testPersonCriteria.getAge).toHaveBeenCalled();
            expect(testPersonCriteria.getAge).toHaveBeenCalledWith("10/25/1990");
        });
        it('Person Should not been infected with HIV+',function(){
            var testPersonCriteria = new Candidate();
            spyOn(testPersonCriteria,'checkHIV');
            testPersonCriteria.ValidateHIV();
            expect(testPersonCriteria.checkHIV).toHaveBeenCalled();
 
            
        });
    });
});