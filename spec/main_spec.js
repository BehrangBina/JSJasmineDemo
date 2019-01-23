describe("main.js", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
    it('Should Create a new customer', function(){
        let x = createNewPerson('Behrang');
        expect(x.name).toBe('Behrang');
        const myObj = spyOn(x,'name').and.returnValue(x.name="xxx");
       // console.log(myObj);
        
    });
  });