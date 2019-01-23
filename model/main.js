function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
      alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
  }