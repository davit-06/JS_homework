let student = {name: "Murad", age: 15, grade: 3};

Object.freeze(student);

student.grade = 4;

console.log(student);