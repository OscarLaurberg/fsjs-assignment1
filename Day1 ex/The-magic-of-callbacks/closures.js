var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.


function giveBirthToPerson(birthAge, birthName) {
  let name = "Not born yet";
  let age = "*no age*";
  if(birthName){
    name = birthName;
  }
  if(birthAge){
    age = birthAge;
  }

  return {
    setName: function (newName) {
      name = newName;
    },
    setAge: function (newAge) {
      age = newAge;
    },
    getAgeAndName: function() {
      return `Person was born as ${age} years old, and was given the name ${name}`
    }
  }
}

let person1 = giveBirthToPerson(0,"Smølfe Dr. Jones")
let person2 = giveBirthToPerson(2, 'Smølfine');
console.log(person1.getAgeAndName());
console.log(person2.getAgeAndName());
console.log('Changing age and name')
person1.setAge(1);
person2.setName('Patrick');
console.log(person1.getAgeAndName());
console.log(person2.getAgeAndName());


// Now with a ES6 class instead

class Person {
  constructor(name,age){
    this.name = name ? name : 'Unnamed';
    this.age = age ? age : 'Not born yet';
    
  }
  getAgeAndName(){
    return `Person was born as ${this.age} years old, and was given the name ${this.name}`
  }
  setAge(newAge) {
    this.age = newAge;
}
}

let personFromClass1 = new Person();
let personFromClass2 = new Person('Lone',41);
console.log(personFromClass1.getAgeAndName());
console.log(personFromClass2.getAgeAndName());
personFromClass1.setAge(2);
console.log(personFromClass1.getAgeAndName());
