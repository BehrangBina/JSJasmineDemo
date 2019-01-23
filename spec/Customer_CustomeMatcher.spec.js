describe("<XYZ> Company: Online Order Module", function () {
    beforeEach(function () {
        jasmine.addMatchers(personAgeValidationMatcher);
        jasmine.addMatchers(personNameValidationMatcher);

    });
    describe("When to place the online order: ", function () {
        it("Age should be greater than or equal to 21 years", function () {
            var person = new Person(25, 'James', 'Smith');
            expect(person.age).toBeOlderThan(20);
        });
        it("Age should not be less than  to 20 years", function () {
            var myPerson = new Person(18, "James", "Smith");
            expect(myPerson.age).not.toBeOlderThan(20);

        });
        it("First Name and Last Name are required to place the online order!",
            function () {
                var myPerson = new Person(23, "James", "Smith");
                expect(myPerson).toContainFirstAndLastName();
        });
    });
});