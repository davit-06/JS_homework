let person1 = {
  name: "Jack", 
  age: 23, 
  job: "programming", 
  height: 1.87
};

let person2 = {
  name: "Alina", 
  age: 21, 
  job: "programming", 
  height: 1.87
};

let mergedPerson = Object.assign({}, person1, person2);

console.log(mergedPerson);

