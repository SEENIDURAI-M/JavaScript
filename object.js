const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); 
 
  class Professor{
  
    // constructor(name,teaches)
    // {
    //   this.name = name;
    //   this.teaches=teaches
    // }
    introduceSelf(name,teaches){
      console.log(`My name is Professor ${name} and i will handle your ${teaches}.`);
    }
  };
seeni = new Professor();
sathur = new Professor("sathur", "Poetry");

console.log(seeni.teaches); 
seeni.introduceSelf("seeni", "psychology"); 

sathur.teaches; 
sathur.introduceSelf();

const personPrototype = {
  greet() {
    
const manees = new Person('Manees');
manees.introduceSelf();

class Animal {
  sheep() {
    console.log('Grass');
  }
}
const Name = new Animal();
Name.sheep(); 
console.log("hello!");
  },
};
const carl = Object.create(personPrototype);
carl.greet(); 

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
const manees = new Person('Manees');
manees.introduceSelf();

class Animal {
  sheep() {
    console.log('Grass');
  }
}
const Name = new Animal();
Name.sheep(); 

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();   
walsh.grade('my paper'); 
