var personAgeValidationMatcher = {
    toBeOlderThan: function () {
        return {
            compare: function (actualAge, expectedAge) {
                if (actualAge === expectedAge) {
                    throw "Expected Value Is Required!";
                }
                if (actualAge >= expectedAge) {
                    return {
                        pass: true,
                        message: "Person is eligible to place online order"
                    };
                } else {
                    return {
                        pass: false,
                        message: "Minimum person's age should be 21 years toplace the order online"

                    };
                }
            }
        };
    }
};
var personNameValidationMatcher = {
    toContainFirstAndLastName: function () {
        return {
            compare: function (actual) {
              var fn =actual.firtName;
              var ln = actual.lastName;
                if (fn != undefined&&ln!=undefined) {
                    return {
                        pass: true,
                        message:"Person is eligible to place the online order"
                    };
                } else {
                    return {
                        pass: false,
                        message:"First name and last name are mandatory to process the online order"
                    };
                }
            }
        };
    }
}