var Candidate = function (name, DOB, bloodgroup, donor_receiver) {
    this.myName = name || "Test User";
    this.myBloodGroup = bloodgroup || "B-";
    this.donor_receiver = donor_receiver;
    this.ValidateAge = function (myDOB) {
        this.myDOB || DOB;
        return this.getAge(this.myDOB);
    };
    this.ValidateHIV = function (personName, personDOB, personBloodGroup) {
        this.myName = personName || this.myName;
        this.myDOB = personDOB || this.myDOB;
        this.myBloodGroup = personBloodGroup || this.myBloodGroup;
        return this.checkHIV(this.myName, this.myDOB, this.myBloodGroup);
    };
};
Candidate.prototype.getAge = function (birth) {
    console.log("getAge() function is called");
    var calculatedAge = 0;
    // Logic to calculate person's age will be implemented later
    if (calculatedAge < 18) {
        throw new ValidationError("Person must be 18 years or older");
    }
    return calculatedAge;
};
Candidate.prototype.checkHIV = function (pName, pDOB, pBloodGroup) {
    console.log("checkHIV() function is called");
    bolHIVResult = true;
    // Logic to verify HIV+ will be implemented later
    if (bolHIVResult == true) {
        throw new ValidationError("A person is infected with HIV+");
    }
    return bolHIVResult;
};
// Define custom error for validation
function ValidationError(message) {
    this.message = message;
}
ValidationError.prototype = Object.create(Error.prototype);