function Student(name) {
  this.name = name;
  this.sayHello = function(mss) {
    return "Hello guest!, I'm " + mss;
  }
  this.sayHi = function() {
    return "Hi guest!, I'm " + this.name;
  }
}

var ojb = new Student('john');
ojb.sayHello("Jes.");  // output : "Hello guest!, I'm john"
console.log(ojb.sayHello("Test."));
console.log(ojb.sayHi());
console.log(ojb.name);
