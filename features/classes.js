/* Javascript classes */

class User {
  constructor(name) {
    this.name = name;
  }
  static name = "Mike";
  static sayHello() {
  	return "Hello";
  }

  sayHi() {
    return "Hello " + this.name;
  }

}

// create new object
let user = new User("John");

// instance method
console.log(user.sayHi());

// instance variable
console.log(user.name);

//static method
console.log(User.sayHello());
