function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Alice', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Alice', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hello ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Shafique', ...names];

final.forEach ( (name) => {
  console.log('Hello ' + name);
} );
