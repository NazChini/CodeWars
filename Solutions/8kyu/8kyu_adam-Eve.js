// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// Topics practiced: FUNDAMENTALS | CLASSES | BASIC LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING

//MDN: Subclasses in JS: 
// The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


class God{
  static create(){
    const man = new Man()
    const woman = new Woman()
    return [man, woman]
  }
}

class Human {
  constructor() {}
}

class Man extends Human {
  constructor() {
    super()
  }
}
