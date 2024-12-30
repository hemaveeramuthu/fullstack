const person = { name: "Mithra", age: 20, city: "Salem", country: "INDIA" };
const { name, ...details } = person;

console.log(name); 
console.log(details);