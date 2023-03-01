class Calculator {
    addNumbers(a, b) {
      const sum = a + b;
      return sum;
    }
  }
  const calculator = new Calculator();
  const result = calculator.addNumbers(5, 10);
  console.log(result);
  

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    makeSound() {
      console.log("The animal makes a sound");
    }
  }
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
    makeSound() {
      console.log("The dog barks");
    }
    playFetch() {
      console.log("The dog plays fetch");
    }
  }
  const myDog = new Dog("Rufus", 2, "Labrador");
  console.log(myDog.name); 
  console.log(myDog.age); 
  console.log(myDog.breed);
  myDog.makeSound(); 
  myDog.playFetch(); 
  