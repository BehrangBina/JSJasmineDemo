describe("<ABC> Company: Health Care Solution, ", function () {
    describe("When to donate or receive blood, ", function () {
        it("Person's age should be greater than or equal to 18 years", function () {
            var testPersonCriteria = new Candidate();
            /*
                Whenever the spyOn() function is chained with .and.callThrough,
                the spy will still track all calls to it. However, in addition, it will delegate the
                control back to the actual implementation/function.
            */
            spyOn(testPersonCriteria, "getAge"); //.and.callThrough();
            testPersonCriteria.ValidateAge("10/25/1990");
            expect(testPersonCriteria.getAge).toHaveBeenCalled();
            expect(testPersonCriteria.getAge).toHaveBeenCalledWith("10/25/1990");
        });
        it('Person Should not been infected with HIV+', function () {
            var testPersonCriteria = new Candidate();
            spyOn(testPersonCriteria, 'checkHIV');
            testPersonCriteria.ValidateHIV();
            expect(testPersonCriteria.checkHIV).toHaveBeenCalled();


        });
        // Fake the function with custom return 
        it('Should fake the validate age function and return 18', function () {
            var candidate = new Candidate();
            spyOn(candidate, "getAge").and.callFake(function () {
                return 18;
            });
            candidate.ValidateAge("10/25/1990");
            expect(candidate.getAge).toHaveBeenCalled();
            expect(candidate.getAge()).toEqual(18);
        });
    });
});