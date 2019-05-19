var varName = 'Luca';
var varName = 'Mike';

console.log('varName', varName);

let letName = 'Jen';
console.log('letName', letName);

const constName = 'Frank';
console.log('constName', constName)

// Block scoping

var fullName = 'Luca Candela'

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}
