//Object.create() method
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Joshua';
  me.isHuman = true; 
  
  me.printIntroduction();

//object.freeze() method
  const obj = {
    value: 'Joshua'
  };
  
  Object.freeze(obj);
  
  obj.value = 'Developer';
  
  console.log(obj.value);

  //Object.getOwnPropertyNames() method
  const object1 = {
    myName: 'Joshua',
    age: 13,
    occupation: 'Web developer'
  };
  
  console.log(Object.getOwnPropertyNames(object1));

  