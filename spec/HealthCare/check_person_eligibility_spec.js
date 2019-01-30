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
        // Blood Donor Scenarios
        describe("Person With O+ Blood Group: ", function () {

            it("can receive the blood of the person with O+ blood group", function () {
                var testPersonCriteria = new Candidate("John Player","10/30/1980", "O+", "Receiver");
                spyOn(testPersonCriteria, "MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                
               var validatedResult= testPersonCriteria.ValidateBloodGroup(callback);
                //Verify, callback method is called or not
                expect(callback).toHaveBeenCalled();
                expect(callback.calls.any()).toEqual(true);
                expect(callback.calls.count()).toEqual(1);
                //Verify, MatchBloodGroupToGiveReceive is
                // call and check whether control goes back to the function
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.any()).toEqual(true);
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.count()).toEqual(1);
                expect(validatedResult).toContain("O+");
            });
            it("can give the blood to the person with A+ blood group", function () {
                var testPersonCriteria = new Candidate("John Smith", "01/01/1997","O+","Donor");
                spyOn(testPersonCriteria,"MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                var validatedResult = testPersonCriteria.ValidateBloodGroup(callback);
                expect(callback).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.any()).toEqual(true);
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.count()).toBe(1);
                expect(validatedResult).toContain("A+");
            });
        });

    });
    describe("Tracking Properties", function () {
        describe("Tracking Properties, ", function () {

            beforeEach(function () {
                this.testPersonCriteria = new Candidate();
                spyOn(this.testPersonCriteria, "getAge");
                spyOn(this.testPersonCriteria, "checkHIV")
            });
            it("Should Return 'false' if spy is not called at all ", function () {
                expect(this.testPersonCriteria.getAge.calls.any()).toEqual(false);
            });
            it("should return 'true' if spy is called once", function () {
                this.testPersonCriteria.ValidateAge('10/25/1990');
                expect(this.testPersonCriteria.getAge.calls.any()).toEqual(true);
            });
        });
        describe(".calls.count", function () {
            beforeEach(function () {
                this.testPersonCriteria = new Candidate();
                spyOn(this.testPersonCriteria, "getAge");
            });
            it("should track the number of times the spy is called", function () {
                expect(this.testPersonCriteria.getAge.calls.count()).toEqual(0);
                this.testPersonCriteria.ValidateAge("12/05/1986");
                this.testPersonCriteria.ValidateAge("16/12/1985");
                expect(this.testPersonCriteria.getAge.calls.count()).toEqual(2);
            });
        });
        describe(".calls.argsFor(index) property ", function () {
            beforeEach(function () {
                this.testPersonCriteria = new Candidate();
                spyOn(this.testPersonCriteria, "checkHIV");
            });
            it("should return the argument(s) corresponding to each call", function () {
                this.testPersonCriteria.ValidateHIV("Name1", "11/11/1988", "B+");
                this.testPersonCriteria.ValidateHIV("Name2", "12/11/1988", "B+");
                this.testPersonCriteria.ValidateHIV("Name3", "13/11/1988", "A+");

                expect(this.testPersonCriteria.checkHIV.calls.argsFor(2)).toEqual(["Name3", "13/11/1988", "A+"]);
                expect(this.testPersonCriteria.checkHIV.calls.argsFor(1)).toEqual(["Name2", "12/11/1988", "B+"]);
                expect(this.testPersonCriteria.checkHIV.calls.argsFor(0)).toEqual(["Name1", "11/11/1988", "B+"]);
                expect(this.testPersonCriteria.checkHIV.calls.allArgs()).toEqual([
                    ["Name1", "11/11/1988", "B+"],
                    ["Name2", "12/11/1988", "B+"],
                    ["Name3", "13/11/1988", "A+"]
                ]);
            });
        });
    });
});